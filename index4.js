const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.PORT||8000;
let number=0;
function ratelimiter(req,res,next)
{
    number=number+1;
    if(number>5)
    {
        res.json({msg:"too many request send"});
        return;
    }
    next();
}
function middle1(req,res,next)
{
    if(req.headers.username=="Vi"&&req.headers.password=="Vis")
    {
        next();
    }
    else
    {
        res.status(404).json({msg:"no user"});
        return;
    }
}
app.get("/",ratelimiter,middle1,function(req,res){
    res.json({msg:"successfully reached"});
})
app.listen(port,()=>{
    console.log("server reached");
})