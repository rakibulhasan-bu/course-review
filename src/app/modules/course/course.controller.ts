import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { courseServices } from "./course.service";

const createCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const course = req.body;
  const result = await courseServices.createCourseIntoDB(course);

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "course created successfully",
    data: result,
  });
});

const getCourseWithReview = CatchAsyncError(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const result = await courseServices.getCourseWithReviewFromDB(courseId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Course and Reviews retrieved successfully",
      data: result,
    });
  },
);

const updateCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const course = req.body;
  const result = await courseServices.createCourseIntoDB(course);
  res.status(200).json({
    message: "course created successfully",
    result,
  });
});

export const courseControllers = {
  createCourse,
  getCourseWithReview,
  updateCourse,
};
