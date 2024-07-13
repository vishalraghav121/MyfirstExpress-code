const express=require("express");
const app=express();
app.use(express.json());
const user=[{
    name:"vishal",
    kidney:[{
        healthy:false},{
        healthy:true
    }]
}]
app.get('/',function(req,res)
{
    const a=user[0].kidney;
    const b=a.length;
    let good=0;
    for(let i=0;i<b;i++)
        {
            if(a[i].healthy)good=good+1;
        }
    const bad=b-good;
    res.json({a,b,good,bad});
})
app.post("/",function(req,res)
{
    const ishealthy=req.body.isheathy;
    user[0].kidney.push({healthy:ishealthy});
    res.json({msg:"Done!"});
})
app.put("/",function(req,res)
{
    for(let i=0;i<user[0].kidney.length;i++)
        {
            user[0].kidney[i].healthy=true;
        }
        res.json({});
})
app.delete("/",function(req,res)
{
    const a=[];
    for(let i=0;i<user[0].kidney.length;i++)
        {
            if(user[0].kidney[i].healthy)
                {
                    a.push({healthy:true});
                }
        }
        user[0].kidney=a;
        res.json({msg:"done bro"});
})
app.listen(3000);
