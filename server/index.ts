import cors from 'cors';
import express from 'express';
import { contactRouter } from './src/routes/contactRoutes';
import * as dotenv from 'dotenv';
import { socialMediaRouter } from './src/routes/socialMediaRoutes';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
// console.log(process.env.EMAIL_PASS);

app.use(cors());
app.use(express.json());
app.use(contactRouter);  
app.use(socialMediaRouter);
// app.use(pageRouter);  

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));