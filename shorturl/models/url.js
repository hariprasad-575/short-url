const mongoose=require('mongoose')

const urlSchema=new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},
{timestamp:true}
);

const URL=mongoose.model('url',urlSchema)

module.exports=URL