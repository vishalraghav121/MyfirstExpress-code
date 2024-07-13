const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.PORT||5000;
app.get("/",function(req,res){
    const a=req.query.kidneyId;
    const b= req.headers.username;
    const c=req.headers.password;
    if(b!="vishal"||c!="vishal@123")
    {
        res.status(401).json({msg:"user not authorised"});
        return;
    }
    if(a!=1&&a!=2)
    {
        res.status(411).json({msg:"wrong input"});
        return;
    }
    res.status(200).json({msg:"succesfully entre"});
})
app.listen(port,(error)=>{
   if(!error)console.log("successful");
   else
   console.log("error occured");
})