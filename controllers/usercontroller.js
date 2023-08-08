const User = require("../models/usermodel")


exports.createUser = async (req,res) => {
    try {
        const{name,email} = req.body
        if(!name || !email){
            throw new Error("name and email are required")
    }
        const userExists =   User.findOne({email})
         if (userExists) {
            throw new Error("email already exists")
         }
         const user = await User.create({
            name,
            email

         })
         res. status(200).json({
            success:true,
            message:"user created successfully",
            user
         })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message,
        })
        
    }
}