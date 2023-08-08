const express = require ('express')

const connectToDB = require("./confif.db")

const app = express()

app.use(express.json)

app.use(express.urlencoded({extended: true}))

connectToDB()

const userRoutes = require("./routes/userRoutes")

app.use("/", userRoutes)

app.get("/", (req, res) => {
res.send("<h1>welcome to our custom server</h1>")
})
app.get("/youtube" , (req,res) =>{
res.send("<h1>welcome to our pw youtube channel</h1>")
})
app.get("/instagram" , (req,res) =>{
    res.json({
        success:true,
        message:"welcome to pw instagram"
    })
    })

    module.exports = app