import { Pool } from 'pg';
import 'dotenv/config';

const db_config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};
const connection = new Pool(db_config);
const query = async function(text, params) { return await connection.query(text, params); }
const close = function() { connection.end(); }
let helpers = {
    nextId: async () => { 
        const totalUserCount = await database.query('SELECT COUNT(id) FROM messages;'); 
        if(totalUserCount.rows[0].count === '0') { return 0; }
        else return parseInt(totalUserCount.rows[0].count); 
    }
}

let create = (info) => {
    return {
        text:'INSERT INTO messages(id, name, email, msg) VALUES ($1, $2, $3, $4)', 
        values: [ helpers.nextId, info.name, info.email, info.msg ] 
    }; 
}


export default { connection, query, close, create };