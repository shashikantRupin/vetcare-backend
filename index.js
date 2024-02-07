const express=require('express');
const cors=require('cors');
const { connection } = require("./config/db");
const {userRouter} =require("./Routes/userrouter")
const {doctorRouter} = require("./Routes/DoctorRouter")
const {AppointmentRouter} = require("./Routes/AppointmentRouter")
const {authenticator}  = require("./Middleware/authenticator")
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());


app.use('/user',userRouter);

app.use("/doctor",doctorRouter)

app.use(authenticator)

app.use("/appointment",AppointmentRouter)

app.get('/',(req,res)=>{
    res.send("Server is Working")
})

const PORT = process.env.PORT || 3000; // Use uppercase PORT, and set a default value of 3000

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("Error while connecting to DB:", error);
  }
  console.log("Server Running on port " + PORT);
});
