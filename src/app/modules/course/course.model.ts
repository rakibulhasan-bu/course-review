import { Schema, model } from "mongoose";
import { TCourse, TTag } from "./course.interface";

const TagSchema = new Schema<TTag>({
  name: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const CourseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  tags: [TagSchema],
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  durationInWeeks: {
    type: Number,
  },
  details: {
    level: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    description: {
      type: String,
      required: true,
    },
  },
});

// CourseSchema.post("save", function (doc) {
//   doc.durationInWeeks = Math.ceil(
//     Math.abs(doc.endDate - doc.startDate) / (1000 * 60 * 60 * 24 * 7),
//   );
//   doc.save();
// });

const Course = model("Course", CourseSchema);

export default Course;

// get: function () {
//   const diffInDays = Math.floor(
//     Math.abs(this.endDate - this.startDate) / (1000 * 60 * 60 * 24),
//   );
//   return Math.ceil(diffInDays / 7);
// },
