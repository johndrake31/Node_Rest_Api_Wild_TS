import express, { Request, Response, NextFunction, json } from 'express';
import mongoose from 'mongoose';
import { wildersRouter } from './routes/wilders'
const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err: Error) => console.log(err));

app.use(json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello s world')
})

app.use('/api/wilders', wildersRouter);
app.listen(4000, function () {
    console.log('Server started');
});