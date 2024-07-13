const express=require("express");
const zod=require("zod");
const app=express();
let number =0;
function middleware1(req,res,next)
{
   number++;
   console.log(number);
    next();
}
app.use(middleware1);
app.use(express.json());
app.get("/",function(req,res){

      res.send(console.log("hoi"));
})
app.post("/a",function(req,res){
    set
    res.send("hi");
})
app.listen(3000,()=>{
    console.log("server reached");
})