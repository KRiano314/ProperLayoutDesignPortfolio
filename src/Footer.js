"use client"

import { useState } from "react"
import "./Footer.css"

export default function Footer({ contactRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer ref={contactRef} className="footer">
      <div className="footer-content">
        <h3>Get in Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>Send Message</h4>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {showSuccess && <div className="success-message">Message sent successfully! I'll get back to you soon.</div>}
        </form>

        <div className="footer-links">
          <a href="mailto:kelseyriano8@gmail.com">kelseyriano8@gmail.com</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <div className="footer-bottom">
        </div>
      </div>
    </footer>
  )
}
