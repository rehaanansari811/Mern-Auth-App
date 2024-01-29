import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Succeeded to connected to MongoDB 🚀");
    })
    .catch((err) => console.log(err));


const app = express();
app.use('/api/user',userRoutes);

app.listen(3000, () => {
    console.log("Server is listening on PORT  http://localhost:3000");
})

