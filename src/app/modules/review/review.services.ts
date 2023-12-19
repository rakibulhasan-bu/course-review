import { TReview } from "./review.interface";
import Review from "./review.model";

const createReviewIntoDB = async (reviewData: TReview) => {
  const user = new Review(reviewData);

  const result = await user.save();
  return result;
};
export const reviewService = {
  createReviewIntoDB,
};
