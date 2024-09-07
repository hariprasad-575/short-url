const express=require('express')
const { handlecreateSignup, handlecreateLogin } = require('../controllers/user')

const router=express.Router()

router.post('/signup',handlecreateSignup);
router.post("/login",handlecreateLogin);

module.exports=router