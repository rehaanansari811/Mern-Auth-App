import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome Rehaan');
})
app.listen(3000,()=>{
    console.log("Server is listening on PORT  http://localhost:3000");
})