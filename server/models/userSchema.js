const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    dept:{
        type:String,
        required:true

    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})

const data = new mongoose.model("users",userSchema);

module.exports = data;


