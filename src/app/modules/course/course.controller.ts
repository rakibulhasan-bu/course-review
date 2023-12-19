import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { courseServices } from "./course.service";

const createCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const course = req.body;
  const result = await courseServices.createCourseIntoDB(course);
  res.status(200).json({
    message: "course created successfully",
    result,
  });
});

export const courseControllers = { createCourse };
