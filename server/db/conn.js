const mongoose = require('mongoose');

const DB = "mongodb+srv://pradip13:mongodb13@cluster0.gxseqmy.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB, {

}).then(()=>console.log("connection start")).catch((err)=>console.log(err.message));