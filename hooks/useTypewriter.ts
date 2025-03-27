import { useState, useEffect } from "react"

export function useTypewriter(texts: string[], speed: number = 150) {
  const [text, setText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const currentSpeed = isDeleting ? speed : speed

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        setCharIndex(0)
      } else {
        const timer = setTimeout(() => {
          setText(currentText.substring(0, text.length - 1))
        }, currentSpeed)
        return () => clearTimeout(timer)
      }
    } else {
      if (text === currentText) {
        const timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setText(currentText.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        }, currentSpeed)
        return () => clearTimeout(timer)
      }
    }
  }, [text, textIndex, charIndex, isDeleting, texts, speed])

  return text
} 