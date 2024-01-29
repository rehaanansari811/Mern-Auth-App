import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Succeeded to connected to MongoDB 🚀");
    })
    .catch((err) => console.log(err));


const app = express();
app.use(express.json())
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    });
})
app.listen(3000, () => {
    console.log("Server is listening on PORT  http://localhost:3000");
})
