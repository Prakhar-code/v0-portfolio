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
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 20px auto; background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background-color: #8b4f8b; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 500; }
            .content { background-color: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .message-details { background-color: #f8f9fa; padding: 25px; margin: 20px 0; border-radius: 6px; border: 1px solid #e9ecef; }
            .message-details h2 { color: #333; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #8b4f8b; }
            .detail-row { display: flex; margin: 15px 0; align-items: flex-start; }
            .detail-label { font-weight: 600; color: #555; width: 120px; flex-shrink: 0; }
            .detail-content { flex: 1; color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; border-top: 1px solid #eee; }
            p { color: #444; font-size: 16px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank you for reaching out to me</h1>
            </div>
            <div class="content">
              <p>Hi there,</p>
              <p>I have successfully received your message and will get back to you soon.</p>
              
              <div class="message-details">
                <h2>Message Details</h2>
                <div class="detail-row">
                  <span class="detail-label">Subject:</span>
                  <span class="detail-content">${validatedData.subject}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Message:</span>
                  <span class="detail-content" style="padding-left: 20px;">${validatedData.message}</span>
                </div>
              </div>
              
              <p>I appreciate your interest and will respond to your inquiry as soon as possible.</p>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} Prakhar Kabra. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 20px auto; background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background-color: #8b4f8b; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 500; }
            .content { background-color: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .message-details { background-color: #f8f9fa; padding: 25px; margin: 20px 0; border-radius: 6px; border: 1px solid #e9ecef; }
            .message-details h2 { color: #333; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #8b4f8b; }
            .detail-row { display: flex; margin: 15px 0; align-items: flex-start; }
            .detail-label { font-weight: 600; color: #555; width: 120px; flex-shrink: 0; }
            .detail-content { flex: 1; color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; border-top: 1px solid #eee; }
            .timestamp { color: #888; font-size: 14px; text-align: right; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="message-details">
                <h2>Contact Details</h2>
                <div class="detail-row">
                  <span class="detail-label">Name:</span>
                  <span class="detail-content">${validatedData.name}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span>
                  <span class="detail-content">${validatedData.email}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Subject:</span>
                  <span class="detail-content">${validatedData.subject}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Message:</span>
                  <span class="detail-content" style="padding-left: 20px;">${validatedData.message}</span>
                </div>
                <div class="timestamp">
                  Submitted on: ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} Prakhar Kabra. All rights reserved.
            </div>
          </div>
        </body>
        </html>
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

