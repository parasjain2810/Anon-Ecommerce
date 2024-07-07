const express=require("express");
const colors=require("colors");
const app=express();
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
const categoryRoutes=require('./routes/categoryRoutes');
const productRoutes =require("./routes/productRoutes.js");
const morgan=require("morgan");


const cloudinary=require('./config/cloudinary');
const connectDB = require("./config/database");

require("dotenv").config();


app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin:"*",
    methods:["GET","PUT",'DELETE',"UPDATE","POST"],
    credentials:true
}));
connectDB();
cloudinary.cloudinaryConnect();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product", productRoutes);

const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server connect succesfully at port nu. ${PORT}`.bgCyan.white);
})


// app.get("/",(req,res)=>{
//   res.send(`<h1>Server start successfully</h1>`);
// })