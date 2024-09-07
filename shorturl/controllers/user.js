const user=require('../models/user')
const {v4:uuidv4}=require("uuid");
const { setUser } = require('../service/auth');
async function handlecreateSignup(req,res) {
    const {name,email,password}=req.body;
    await user.create({
        name,
        email,
        password
    })
    return res.redirect('/')
}
async function handlecreateLogin(req,res) {
    const {email,password}=req.body;
    const client=await user.findOne({email,password})
    // console.log(client);
    if(!client){
        return res.render('login',{
            error:"Invalid Username or Password",
        });
    }
    
    const token=setUser(client);
    res.cookie('uid',token);
    return res.redirect('/')
}

module.exports={handlecreateSignup,handlecreateLogin}