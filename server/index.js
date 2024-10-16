import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working");
  });

import userRoutes from "./routes/user.js";

app.use('/api',userRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
  });