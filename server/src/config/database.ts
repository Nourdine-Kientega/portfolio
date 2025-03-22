import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

(async () => {
    try {
        await dbConnection.connect();
        console.log('✅ Database is successfully connected');
    } catch (error) {
        console.error('🚨 Database connection failed', error);
        process.exit(1);
    }
})();

export default dbConnection;