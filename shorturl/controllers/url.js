const shortid=require('shortid')
const url=require("../models/url")

async function handleGenereateNewShorturl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"})
    const shortID=shortid();
    await url.create({
        shortid:shortID,
        redirecturl:body.url,
        visitHistory:[],
        createdBy:req.user._id,
    })
    return res.render('index',{id:shortID})
}
async function handlegeturl(req,res) {
    const shortid=req.params.shortID;
    const result=await url.findOne({shortid})
    res.redirect(result.redirecturl)
}


module.exports={handleGenereateNewShorturl,handlegeturl}