require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const cors = require("cors");

app.use(cookieParser());


const allowedOrigins = [
    'http://localhost:5173',
];
const corsOptions = {
    origin: function(origin, callback){
        if(allowedOrigins.indexOf(origin)!==-1 || !origin){
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS'));
        }
    } ,
    credentials: true,
} ;
app.use(cors(corsOptions));
app.use(bodyParser.json());

const mongoose = require("mongoose")
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


const startServer = async()=>{
    try{
        await mongoose.connect(uri);
        console.log("database connected");
    }
    catch(err){
        console.log("error connecting to database",err);
    }

}
startServer();







app.listen(PORT, ()=>{
    console.log(`listening to server ${PORT}`);
})


app.use("/",authRoute);
app.use(express.json());
