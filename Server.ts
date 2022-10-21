import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import UsersRoute from "./Routes/UsersRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import orderRoute from "./Routes/orderRoute";
import Auth from "./Routes/AuthRoute";
import connect from "./Database/Connect"


dotenv.config();

const app =express();
//access controller
app.use(cors());
app.use(express.json());
app.use(express.static('Images'));
//connect to database
``
try {
  // dbConnection();
  connect
} catch (error:any) {
    console.log("Error :"+error.message);
}

//Main routes
app.use("/api",UsersRoute);

app.use("/api",ProductsRoute);

app.use("/api",orderRoute);

app.use("/auth",Auth);

const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`Server Listening at port ${port}`);
});