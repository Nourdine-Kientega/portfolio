import dbConnection from "../config/database";
import { sendMail } from "../services/mailService";

export const sendContactMessage = async (req, res) => {

    const { firstname, lastname, email, subject, message } = req.body;    
    
    try {
        // Send the contact message to nodemailer
        await sendMail(`${firstname} ${lastname}`, email, subject, message);

        const query = `INSERT INTO contact_messages(firstname, lastname, email, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING created_at;`;
        const value = [ firstname, lastname, email, subject, message ];

        // Store user to database
        const result = await dbConnection.query(query, value);

        if (result.rows.length > 0) {
            res.status(200).json({
                message: 'Message sent and saved successfully!',
                contact: result.rows[0],
            });
        } else {
            throw new Error('Failed to insert contact message into the database.');
        }

    } catch (error) {

        if (error.code === '23505') {
            res.status(409).json({
                error: 'This email already exists in our database.',
                emailExists: true  // Send a flag to indicate email duplication
            });
        } else {
            console.error('Error processing contact message:', error);
            res.status(500).json({ error: 'An error occurred while processing your message.' });
        }

        // res.status(500).json({ error: 'An error occurred while processing your message.' });
    }
};
