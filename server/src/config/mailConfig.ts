
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({

  service: 'gmail',
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  }
});
 
// Mail configuration status
transporter.verify((error, success) => {
    if (error) {
      console.error('🚨 Mail server configuration error:', error.message);
      process.exit(1); // stop process
    } else {
      console.log('✅ Mail server configured correctly and ready to send emails');
    }
});