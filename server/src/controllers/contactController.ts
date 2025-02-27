import { sendMail } from "../services/mailService";


// sendMail();

export const sendContactMessage = async (req, res) => {

    const { firstname, lastname, email, subject, message } = req.body;
    
    try {
        await sendMail(`${firstname} ${lastname}`, email, subject, message);
        res.status(200).json({ message: 'Message envoyé avec succès !' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }

    // console.log('contact message controller', req.body);
    // res.status(200).json(req.body); 
};
 
  