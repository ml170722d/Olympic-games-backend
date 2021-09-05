import express from 'express';
import cors from 'cors'
import { json } from 'body-parser';
import mongoose from 'mongoose'
import { URI } from './db/dbURI';
import UserRouter from './routers/user.router';

const app = express();
const port = 4000;

app.use(cors());
app.use(json());

const appRouter = express.Router();
appRouter.use('/user', UserRouter);

app.use('/', appRouter);
const server = app.listen(port, () => {
    console.log(`Express server running on port ${port}`);

    const optinons: mongoose.ConnectOptions = {
        autoIndex: true,
        keepAlive: true,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4, // Use IPv4, skip trying IPv6
    };
    mongoose.connect(URI, optinons).then(() => {
        console.log(`> Connection with databse is open`);
    }).catch(err => console.error);

});