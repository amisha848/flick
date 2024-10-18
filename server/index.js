import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is working");
  });

import userRoutes from "./routes/user.js";
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';

app.use('/api',userRoutes);
app.use('/api',courseRoutes);
app.use('/api',adminRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
  });