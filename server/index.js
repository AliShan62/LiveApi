import express from 'express';
import { connection } from './dbconnection.js';


const app=express();

const PORT=8000;
const db_url="mongodb+srv://rraj58361:1234567890@cluster0.gtglraw.mongodb.net/?retryWrites=true&w=majority";
connection(db_url);
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});
