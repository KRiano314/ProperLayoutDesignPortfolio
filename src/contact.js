import fs from "fs"
import path from "path"

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, email, subject, message, timestamp } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // Create contacts directory if it doesn't exist
    const contactsDir = path.join(process.cwd(), "public", "contacts")
    if (!fs.existsSync(contactsDir)) {
      fs.mkdirSync(contactsDir, { recursive: true })
    }

    // Create unique filename using timestamp and name
    const date = new Date(timestamp)
    const dateString = date.toISOString().replace(/[:.]/g, "-").split("T")[0]
    const timeString = date.toISOString().replace(/[:.]/g, "-").split("T")[1].split(".")[0]
    const safeName = name.replace(/[^a-zA-Z0-9]/g, "_").substring(0, 20)
    const filename = `${dateString}_${timeString}_${safeName}.txt`

    // Format the message content
    const messageContent = `CONTACT FORM SUBMISSION
========================

Date & Time: ${new Date(timestamp).toLocaleString()}
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
--------
${message}

========================
End of Message
`

    // Define file path
    const filePath = path.join(contactsDir, filename)

    // Write the message to individual txt file
    fs.writeFileSync(filePath, messageContent, "utf8")

    console.log(`Contact form saved: ${filename}`)

    res.status(200).json({
      message: "Message sent successfully",
      filename: filename,
    })
  } catch (error) {
    console.error("Error saving contact form:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
