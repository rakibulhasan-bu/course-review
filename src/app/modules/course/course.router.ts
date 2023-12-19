import express from "express";
import { courseControllers } from "./course.controller";

export const courseRouter = express.Router();

courseRouter.post("/course", courseControllers.createCourse);
