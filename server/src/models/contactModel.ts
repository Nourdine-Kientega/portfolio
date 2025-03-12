import dbConnection from "../config/database";

export const createTables = async () => { 

    const checkArticleTable = `SELECT EXISTS (
        SELECT 1 from information_schema.tables
        where table_name = 'contact_messages'
    );`;

    const ArticleTable = `CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );`;

    try {
        const checkTable = await dbConnection.query(checkArticleTable); // verify if table already exists
        
        if(checkTable.rows[0].exists) {  

            console.log('✅ Contact messages table already exist'); 
        } else {

            await dbConnection.query(ArticleTable);
            console.log('✅ Contact messages table created successfully');
        }

    } catch (error) {
        console.error('🚨 Error creating table: ', error);
        throw error; // stop app if it continue running
    }
};
