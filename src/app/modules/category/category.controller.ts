import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { categoryServices } from "./category.service";

const createCategory = CatchAsyncError(async (req: Request, res: Response) => {
  const category = req.body;
  const result = await categoryServices.createCategoryIntoDB(category);
  res.status(200).json({
    message: "category created",
    result,
  });
});

const getAllCategory = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await categoryServices.getAllCategoryFromDB();
  res.status(200).json({
    message: "category created",
    result,
  });
});

export const categoryController = {
  createCategory,
  getAllCategory,
};
