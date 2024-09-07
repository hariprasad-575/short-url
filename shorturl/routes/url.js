const express=require('express')
const { handleGenereateNewShorturl, handlegeturl } = require('../controllers/url')

//Router
const router=express.Router()


router.post('/',handleGenereateNewShorturl)
router.get('/:shortID',handlegeturl)


module.exports=router