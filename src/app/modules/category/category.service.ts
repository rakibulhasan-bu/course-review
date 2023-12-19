import { TCategory } from "./category.interface";
import Category from "./category.model";

const createCategoryIntoDB = async (category: TCategory) => {
  return await Category.create(category);
};

export const categoryServices = {
  createCategoryIntoDB,
};
