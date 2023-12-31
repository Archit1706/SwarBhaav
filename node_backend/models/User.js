const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean,
        required:true,
    }
},
{
    timestamps:true,
}

);


module.exports=mongoose.model("User",userSchema);