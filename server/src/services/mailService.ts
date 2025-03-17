import { transporter } from "../config/mailConfig";

interface sendMailProps {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
};

export const sendMail = async ({firstname, lastname, email, subject, message}: sendMailProps) => {

    // Mail for my destination
    const mailOptions = {

        from: `"${firstname} ${lastname} "<${email}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: subject === '' ? `Message de ${firstname} ${lastname} via le formulaire de contact de mon portfolio`: subject,
        text: message,
    }

    await transporter.sendMail(mailOptions);

    // Reply user with mail
    const userMailOptions = {

        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation de réception de votre message',
        text: `Bonjour ${firstname} ${lastname},\n\nMerci pour votre message ! J'ai bien reçu votre demande et je vous y répondrai le plus vite possible.\n\nCordialement,\nKientega Baskonwende Nourdine`,
    }

    await transporter.sendMail(userMailOptions);
};