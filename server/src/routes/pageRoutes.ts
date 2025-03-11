import express from 'express';
import { getHomepage } from '../controllers/pageController';

export const pageRouter = express.Router();

pageRouter.get('/', getHomepage);


