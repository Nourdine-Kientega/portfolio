import express from "express";
import { sendContactMessage } from "../controllers/contactController";

export const contactRouter = express.Router();

contactRouter.post('/contact/', sendContactMessage);



