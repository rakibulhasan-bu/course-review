import express from "express";
import { courseControllers } from "./course.controller";
import { courseValidation } from "./course.validation";
import validateRequest from "../../middleware/validateRequest";

const courseRouter = express.Router();

courseRouter.post(
  "/course",
  validateRequest(courseValidation.createCourseValidationSchema),
  courseControllers.createCourse,
);

courseRouter.put(
  "/courses/:courseId",
  validateRequest(courseValidation.updateCourseValidationSchema),
  courseControllers.updateCourse,
);

export default courseRouter;
