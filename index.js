import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import Users from './Routes/Users.js'
import cors from 'cors'
dotenv.config()


const app = express()

app.use(cors());


mongoose.connect(process.env.URL).then(console.log("MG_connected")).catch(err=> console.log(err));

const db = mongoose.connection

app.get('/', (req, res) => {
    res.send("This is sample")
})


app.use(express.json())
app.use('/users',Users)
 
const PORT  = 5008
app.listen(PORT, () => {
    
    console.log(`Server started on ${PORT}`);
})