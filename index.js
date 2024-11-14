const express = require("express");
const mongoose =require("mongoose");

const app = express();
app.use(express.json());
mongoose .connect("mongodb+srv://fahakintayo:VM7RS9Z13JYcAL5w@cluster0.nli88.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("DB connected"))
.catch(err=> console.log(err))

const childSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    stateoforigin:{
        type: String
    }
})

const userModel= new mongoose.model("Children",childSchema)



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

app.post("/addnewchild", (request,response)=>{
    console.log(request.body);
    const newChild = new userModel();
    newChild.name = request.body.name;
    newChild.age = request.body.age;
    newChild.stateoforigin = request.body.stateoforigin;

    newChild.save()
    .then(() => response.send("Child Registartion Successful"))
    .catch(err=>{
        console.log(err);
        
        response.send("child could not be added");
        
    })
})

app.get("/allchildren", (request,response)=>{
    userModel.find()
    .then(data=>{
        console.log(data)
        response.json({
            message:"Data found",
            data
        })
    })
        .catch(err=>{
            console.log(err)
            response.send("An error occured")
        })
   

})

const port = process.env.PORT || 2020;
app.listen(port, console.log("I am running on port", port))
