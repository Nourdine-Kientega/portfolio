import express from "express";
import { sendContactMessage } from "../controllers/contactController";
import { getHomepage } from "../controllers/pageController";

export const contactRouter = express.Router();

contactRouter.get('/', getHomepage);
contactRouter.post('/contact/', sendContactMessage);

