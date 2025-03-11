
import dotenv from 'dotenv';

dotenv.config();

export const socialMediaRedirect = (req, res) => {

    const platform: string = req.params.platform;
    const redirectsLinks: Record<string, string | undefined> = {
        facebook: process.env.FACEBOOK_URL,
        whatsapp: process.env.WHATSAPP_URL,
        linkedin: process.env.LINKEDIN_URL
    };

    if(redirectsLinks[platform]) {
        return res.redirect(redirectsLinks[platform]!);
    } else {
        return res.status(404).send("Page Not Found");
    }
};