import cors from 'cors';
import express from 'express';
import { contactRouter } from './src/routes/contactRoutes';
import * as dotenv from 'dotenv';
import { socialMediaRouter } from './src/routes/socialMediaRoutes';
import { createTables } from './src/models/contactModel';

  
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