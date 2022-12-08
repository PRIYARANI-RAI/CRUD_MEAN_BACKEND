import mongoose from "mongoose";
const config = require("./config/config");
import 'dotenv/config';

const configValue = config.get(process.env.NODE_ENV);
const db = configValue["DB"];
const option = {
    user: db.USERNAME,
    pass: db.PASSWORD,
}
const MONGOURL = `mongodb://${db.HOST}:${db.PORT}/${db.DATABASE}`
export const mongoconnecton = async () => {
    try {
        await mongoose.connect(MONGOURL, option);
        console.log("This Database Is Connected!!!");
    }
    catch (e) {
        console.log("Database Not Connected")
    }
}