import { Request, Response } from "express";
import { reviewService } from "./review.services";
import { CatchAsyncError } from "../../utils/CatchAsyncError";

const createReview = CatchAsyncError(async (req: Request, res: Response) => {
  const review = req.body;

  const result = await reviewService.createReviewIntoDB(review);
  res.status(200).json({
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

export const reviewController = {
  createReview,
};
