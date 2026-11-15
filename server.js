import express from 'express';
import sum from "./sum.js";
const app=express();
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});
app.get('/home',async(req,res)=>{
    res.json({
        message:"I am the root!"
    })
})
app.get('/sum/:a/:b',async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        Total:sum(parseInt(a),parseInt(b))
    })
})