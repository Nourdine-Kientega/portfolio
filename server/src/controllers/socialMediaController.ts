
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

export const socialMediaRedirect = (req: Request, res: Response) => {

    const platform: string = req.params.platform;
    const redirectsLinks: Record<string, string | undefined> = {
        facebook: process.env.FACEBOOK_URL,
        whatsapp: process.env.WHATSAPP_URL,
        linkedin: process.env.LINKEDIN_URL
    };

    if(redirectsLinks[platform]) {
        res.redirect(redirectsLinks[platform]!);
    } else {
        res.status(404).send("Page Not Found");
    }
};