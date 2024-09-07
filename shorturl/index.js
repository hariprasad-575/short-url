const express=require('express')
const {mongoDbConnector}=require("./connection")
const path=require('path')
const cookiePareser=require('cookie-parser')

const url=require('./models/url')

//Route variables
const urlRoutes=require("./routes/url")
const staticrouter=require("./routes/staticrouter")
const userRoute=require("./routes/user")
const { restrictTologged, checkAUth } = require('./middlewares/auth')

const app=express()
const port=8000


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookiePareser())

//connection
mongoDbConnector("mongodb://127.0.0.1:27017/shortURL").then(() => {
    console.log("MONGODB CONNECTED");
});

//ejs
app.set('view engine','ejs') 
app.set('views',path.resolve("./views"))


app.get('/test',async(req,res)=>{
    const allURL=await url.find({})
    return res.render('index',{urls:allURL})
})

app.get('/user',async(req,res)=>{
    return res.render('signup')
})

//ROUTESSSS
app.use('/url',restrictTologged,urlRoutes);
app.use('/',checkAUth,staticrouter);
app.use('/user',userRoute);

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})
