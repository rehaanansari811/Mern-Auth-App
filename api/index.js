import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Succeeded to connected to MongoDB 🚀");
    })
    .catch((err) => console.log(err));


const app = express();

app.get('/', (req, res) => {
    res.send('Welcome Rehaan');
})
app.listen(3000, () => {
    console.log("Server is listening on PORT  http://localhost:3000");
})