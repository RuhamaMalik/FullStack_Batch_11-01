import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/db.js';
const app = express()


dotenv.config();
dbConnection();


// middlewares
app.use(express.json())
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'))




app.listen(process.env.PORT, () => console.log(`Exampl
  e app listening on port ${process.env.PORT}!`))