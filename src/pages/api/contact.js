import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure the email transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "premenaga@gmail.com",
        pass: "evnrfbsucxwgvrus",
      },
    });

    // Create the email content
    const mailOptions = {
      from: `<${email}>`,
      to: "premenaga@gmail.com",
      subject: "New Contact Form Submission From Portfolio",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Email sent successfully
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      // Log the error message
      console.error("Error sending email:", error);

      // Failed to send email
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    // Invalid request method
    res.status(405).json({ error: "Method not allowed." });
  }
}
