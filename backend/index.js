import Express  from "express";
import dbModel from "./models/db.js";
import cors from 'cors';
import userRouter from './routes/userRoutes.js'
const app = Express();
app.use(Express.json())
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).send("Welcome")
})
// app.use('/student',studentRouter);
app.use('/user',userRouter);
const port = 3500;

app.listen(port,()=>{
    console.log(`Listening on ${port}`); 
})