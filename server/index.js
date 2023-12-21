import express from 'express';
import { connection } from './dbconnection.js';
import router from './view/route.js';
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(cors())
app.use("/",router);

const PORT=8000;
const db_url="mongodb+srv://rraj58361:1234567890@cluster0.gtglraw.mongodb.net/?retryWrites=true&w=majority";
connection(db_url);
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});
