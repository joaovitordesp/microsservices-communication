import express from "express";
import AuthController from "./controller/AuthController";

const PORT = 8080;
const env = process.env;
const app = express();

app.listen(PORT, ()=>{
    console.info(`Server started sucessfully at port ${PORT}`);
})

app.get('/api/status', (req, res)=>{ 
    return res.json({
        service: 'Auth-Api',
        status: "up",
        httpStatus: 200
    })
})