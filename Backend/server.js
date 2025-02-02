import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'





const app=express()
const port=4000


app.use(express.json())
app.use(cors())
// db connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)



app.get("/",(req,res)=>{
  res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://Createstack:21072003@cluster0.59dj6bk.mongodb.net/?