import express from "express";

const app=express()
const PORT=1234

app.get('/',(req,res)=>{
    res.json({msg:"Hello students!"});
});

app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})
