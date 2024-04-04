import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //giving a limit for the incoming json files
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for url codes
app.use(express.static("public")); //for public file storage
app.use(cookieParser());

export default app;
