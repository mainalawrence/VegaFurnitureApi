import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connect from "./Database/Connect"
import compression from 'express'
import path from 'path'
import router from "./Routes";
dotenv.config();

const app = express();
app.use(compression());
//access controller

app.use(express.json());
app.use(cors())
app.use(express.static('Images'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/static', express.static(path.join(__dirname, 'furnitureApp')));

app.get('/api', function (req, res) {
  res.sendFile(`/`, { root: path.join(__dirname, 'furnitureApp') });
});
app.use("/", router);

//connect to database
try {
  connect
} catch (error: any) {
  console.log("Error :" + error.message);
}



const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server Listening at port ${port}`);
});