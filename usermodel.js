const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        required:[true, "Name is required"],
    trim: true
    },
    email: {
        type: string,
        required:[true, "email is required"],
        unique:true
    }
})

module.exports = mongoose.model("user", userSchema)

//User -> user