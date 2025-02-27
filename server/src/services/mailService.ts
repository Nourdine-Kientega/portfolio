import { transporter } from "../config/mailConfig";

export const sendMail = async (name, email, subject, message) => {

    const senderName = name || 'Anonyme'; // Fallback if name is not provided
    const senderEmail = email;

    // Mail for my destination
    const mailOptions = {

        from: `"${senderName}"<${senderEmail}>`,
        to: process.env.EMAIL_USER,
        subject: subject === '' ? `Message de ${name} via le formulaire de contact de mon portfolio`: subject,
        text: message,
    }

    await transporter.sendMail(mailOptions);

    // Reply user with mail
    const userMailOptions = {

        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation de réception de votre message',
        text: `Bonjour ${name},\n\nMerci pour votre message ! Nous avons bien reçu votre demande et nous y répondrons rapidement.\n\nCordialement,\nMon Nom`,
    }

    await transporter.sendMail(userMailOptions);
};