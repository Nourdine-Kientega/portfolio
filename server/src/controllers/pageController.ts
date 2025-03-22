import { Request, Response } from 'express';

export const getHomepage = (req: Request, res: Response) => {

    res.status(200).send('Welcome to my Nourdine Kientega portfolio server interface');
};