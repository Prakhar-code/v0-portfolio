"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { PrismaClient } from "@prisma/client"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = formSchema.parse(data)

    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Return a success response
    // Store message in database using Prisma
    const prisma = new PrismaClient()
    await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email, 
        subject: validatedData.subject,
        message: validatedData.message,
        createdAt: new Date()
      }
    })

    // Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: validatedData.email,
      subject: "Thank you for your message",
      html: `
        <h1>Thank you for contacting us!</h1>
        <p>We have received your message and will get back to you soon.</p>
        <p>Your message details:</p>
        <ul>
          <li>Subject: ${validatedData.subject}</li>
          <li>Message: ${validatedData.message}</li>
        </ul>
      `
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p>From: ${validatedData.name} (${validatedData.email})</p>
        <p>Subject: ${validatedData.subject}</p>
        <p>Message: ${validatedData.message}</p>
      `
    })

    // Simulate a delay for the server action
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors
      return { success: false, errors: fieldErrors }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}

