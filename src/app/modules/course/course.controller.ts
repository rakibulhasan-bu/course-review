import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { courseServices } from "./course.service";
import { reviewService } from "../review/review.services";

const createCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const course = req.body;
  const result = await courseServices.createCourse(course);

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "course created successfully",
    data: result,
  });
});

const getAllCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await courseServices.getAllCourse(req.query);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Courses retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getCourseWithReview = CatchAsyncError(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const course = await courseServices.getSingleCourse(courseId);
    const reviews = await reviewService.getReviewByCourseID(courseId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Course and Reviews retrieved successfully",
      data: { course, reviews },
    });
  },
);

const getBestCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const review = await reviewService.highestReviews();
  const course = await courseServices.getSingleCourse(review?._id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Best course retrieved successfully",
    data: {
      course,
      averageRating: review?.averageRating,
      reviewCount: review?.reviewCount,
    },
  });
});

const updateCourse = CatchAsyncError(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const result = await courseServices.updateCourse(courseId, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Course updated successfully",
    data: result,
  });
});

export const courseControllers = {
  createCourse,
  getAllCourse,
  getCourseWithReview,
  getBestCourse,
  updateCourse,
};
