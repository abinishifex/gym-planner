import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { profileRouter } from "./routes/profile";
import { planRouter } from "./routes/plan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/profile", profileRouter);
app.use("api/plan" , planRouter ) 

app.listen(PORT, () =>{
    console.log(`server running on port: ${PORT}`);
})