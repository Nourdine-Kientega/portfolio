import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import { createTables } from './models/contactModel';
import { contactRouter } from './routes/contactRoutes';
import { socialMediaRouter } from './routes/socialMediaRoutes';

  
// creates articles table if not exist
createTables();

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(contactRouter);  
app.use(socialMediaRouter);

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));