const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json()); // Allows the server to parse JSON data from the form

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-app-password',    // Replace with your Gmail App Password (see Step 5)
  },
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { FirstName, LastName, Email, PhoneNumber, Message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',        // Sender (your Gmail)
    to: 'destination-email@gmail.com',   // Receiver (your specific Gmail)
    subject: `New Contact Form Submission from ${FirstName} ${LastName}`,
    text: `
      First Name: ${FirstName}
      Last Name: ${LastName}
      Email: ${Email}
      Phone Number: ${PhoneNumber}
      Message: ${Message}
    `,
  };

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  } else {
    console.log('Email sent:', info.response);
    res.json({ success: true });
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });