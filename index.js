const express = require("express");

const app = express();
app.use(express.json());
const port = process.env.PORT || 2020;


console.log(2+2)

app.get("/",(request,response)=>{
    response.json({
        message:" Welcome to our backend application"
    })
})

app.get("/listofusers", (request,response)=>{
    // console.log(request)
})

app.post("/signup", (request,response)=>{
    console.log(request.body)
    response.send("Request Received Successfully")
})

app.listen(port, console.log("I am running on port", port))
