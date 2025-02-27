
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

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
      console.error('🚨 Erreur de configuration du serveur mail:', error.message);
      process.exit(1); // stop process
    } else {
      console.log('✅ Serveur mail configuré correctement et prêt à envoyer des emails');
    }
});