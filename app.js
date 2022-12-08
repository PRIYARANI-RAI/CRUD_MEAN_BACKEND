import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {mongoconnecton} from './db';
mongoconnecton();
import studentRoute from './Route/student'
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.use("/crud/student",studentRoute)

export default app;
