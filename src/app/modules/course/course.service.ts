import { TCourse } from "./course.interface";
import Course from "./course.model";

const createCourseIntoDB = async (course: TCourse) => {
  return await Course.create(course);
};

const getCourseWithReviewFromDB = async (courseId: string) => {
  return await Course.findById(courseId);
};

export const courseServices = { createCourseIntoDB, getCourseWithReviewFromDB };
