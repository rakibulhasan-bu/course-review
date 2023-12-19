import { z } from "zod";

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3),
    instructor: z.string().trim().min(3),
    categoryId: z.string(),
    price: z.number().nonnegative(),
    tags: z.array(
      z.object({
        name: z.string().trim().min(3),
        isDeleted: z.boolean().optional(),
      }),
    ),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string().trim().min(2).max(50),
    provider: z.string().trim(),
    details: z.object({
      level: z.enum(["Beginner", "Intermediate", "Advanced"]),
      description: z.string().trim().min(10),
    }),
  }),
});

export const courseValidation = { createCourseValidationSchema };
