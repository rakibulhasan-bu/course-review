import { TCourse } from "./course.interface";
import Course from "./course.model";

const createCourseIntoDB = async (course: TCourse) => {
  return await Course.create(course);
};

export const courseServices = { createCourseIntoDB };
