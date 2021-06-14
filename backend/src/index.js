import 'dotenv/config';
import express from 'express';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './routes';
import database from './database';

// Values from .env file
const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cors());

// Making DB accessible from req.context
app.use((req, res, next) => { 
    req.context = { database };
    next();
});

app.use('/api/message', router);


app.listen(PORT, HOST, 511, async () => {
    console.log(`Listening at ${ HOST } on ${ PORT }`);
});