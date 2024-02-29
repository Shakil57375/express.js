const express = require("express")
const app = express()

app.get("/" , (req, res)=>{
    console.log("here")
    res.send("the express is running")
})


app.listen(3000, () =>{
    console.log("object")
})