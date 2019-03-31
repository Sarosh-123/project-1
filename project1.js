const express=require('express')
const app=express()
const PORT=process.env.PORT || 4433
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(PORT)