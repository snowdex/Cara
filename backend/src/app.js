import express from "express";
import cors from "cors";
import prisma from "./lib/prisma.js";
import resumeRoutes
from "./routes/resume.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/resumes",
  resumeRoutes
);




export default app;