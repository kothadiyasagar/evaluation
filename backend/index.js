const express = require("express");
const connection = require("./db")
const cors = require("cors");
require("dotenv").config()
const authRouter = require("./routes/auth.routes")
const taskRouter = require("./routes/task.routes");
const { application } = require("express");
const PORT = process.env.PORT || 8086 
const app = express();

app.use(cors());
app.use(express.json())

app.use("/auth", authRouter)
app.use("/user", taskRouter)

app.use("/", (req , res) =>{
     app.status(200).send("homepage")
 })
app.listen(PORT, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:8086")
})