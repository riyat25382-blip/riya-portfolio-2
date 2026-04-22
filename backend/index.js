const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, topic, message } = req.body;

    // Validate inputs
    if (!name || !email || !topic || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'itsmeriya479@gmail.com',
      subject: `Portfolio Contact: ${topic}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${topic}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
