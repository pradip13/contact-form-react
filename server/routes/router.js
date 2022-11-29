const express = require('express');

const router = express.Router();

const users = require('../models/userSchema');

// router.get("/",(req,res)=>{
//     console.log("connect");
// })


router.post("/register", async(req,res)=>{
    // console.log(req.body);
    const {name,email,dept,address,contact} = req.body;


    if(!name || !email || !dept || !address || !contact){
        res.status(404).json("please fill the data");
    }

    try{
        const preusers = await users.findOne({email:email});
        console.log(preusers);

        if(preusers){
            res.status(404).json("user is already present");
        }else{
            const adduser = new users({
                name,email,dept,address,contact
            })

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch(error){
        res.status(404).json(error);
    }
})

// get user data

router.get("/getdata", async(req,res)=>{
    try{
        const userData = await users.find();
        console.log(userData)

        res.status(201).json(userData);

    }catch(error){
        res.status(404).json(error);

    }
})

module.exports = router;