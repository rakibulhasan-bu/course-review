import { TCourse } from "./course.interface";
import Course from "./course.model";

const createCourseIntoDB = async (course: TCourse) => {
  return await Course.create(course);
};

const getAllCourseFromDB = async () => {
  return await Course.find();
};

const getCourseFromDB = async (query: Record<string, unknown>) => {
  const {
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
    minPrice,
    maxPrice,
    tags,
    startDate,
    endDate,
    language,
    provider,
    durationInWeeks,
    level,
  } = query;

  const searchOptions: Record<string, unknown> = {};

  if (language) {
    searchOptions.language = language;
  }
  if (provider) {
    searchOptions.provider = provider;
  }
  if (durationInWeeks) {
    searchOptions.durationInWeeks = durationInWeeks;
  }
  if (level) {
    searchOptions["details.level"] = level;
  }
  if (tags) {
    searchOptions["tags.name"] = tags;
  }
  if (startDate && endDate) {
    searchOptions.startDate = { $gte: startDate, $lte: endDate };
  }
  if (minPrice && maxPrice) {
    searchOptions.price = { $gte: minPrice, $lte: maxPrice };
  }
  let sortOptions = {};
  if (sortBy) {
    sortOptions = { [sortBy as string]: 1 };
  }
  if (sortOrder === "asc" || sortOrder === "desc") {
    sortOptions = sortOrder === "asc" ? { createdAt: 1 } : { createdAt: -1 };
  }
  const skip = (Number(page) - 1) * Number(limit);
  const result = await Course.find(searchOptions)
    .sort(sortOptions)
    .skip(skip)
    .limit(Number(limit))
    .exec();

  const total = await Course.countDocuments(searchOptions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getCourseWithReviewFromDB = async (courseId: string) => {
  return await Course.findById(courseId);
};

export const courseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getCourseFromDB,
  getCourseWithReviewFromDB,
};
