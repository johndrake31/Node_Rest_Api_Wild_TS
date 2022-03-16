import express, { Request, Response, NextFunction, json, urlencoded } from 'express';
import mongoose from 'mongoose';
import { wildersRouter } from './routes/wilders'
import { imageRouter } from './routes/image';

const cors = require('cors')
const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err: Error) => console.log(err));

app.use(express.static(__dirname + '/public'));
app.use(urlencoded());
app.use(json());
app.use(cors());
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello s world')
})

app.use('/api/image', imageRouter);
app.use('/api/wilders', wildersRouter);
app.listen(4000, function () {
    console.log('Server started');
});