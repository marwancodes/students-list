import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
import studentRoutes from "./routers/student.route";
import cors from 'cors';

dotenv.config();


const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"  // you allow only one port can use
}));

// app.get('/', (req, res) => {
//     const student = new studentModel({ fullName: 'Marwan',email: 'marwan@mail.com', age: '29'});
//     student.save();
//     res.send('Hello Marwan');
// });


// Routes
app.use('/students', studentRoutes);

// Running Server
app.listen(port, () => {
    connectDB();
    console.log(`Running on port: ${port}`);
})
