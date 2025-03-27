import express from 'express';
import { socialMediaRedirect } from '../controllers/socialMediaController';

export const socialMediaRouter =  express.Router();

socialMediaRouter.get('/:platform', socialMediaRedirect);