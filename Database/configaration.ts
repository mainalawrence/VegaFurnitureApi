import dotenv from 'dotenv';
import {Pool} from 'pg'
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USERNAME as string,
    password:process.env.PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: "127.0.0.1" as string,
    port:5432
})

export default pool;