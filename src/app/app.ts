import express, { Application, Request, Response } from "express";
import cors from "cors";
import courseRouter from "./modules/course/course.router";
import categoryRoute from "./modules/category/category.route";
import reviewRouter from "./modules/review/review.router";

const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", courseRouter, categoryRoute, reviewRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send(`Course Review server is working perfectly`);
});

// unknown route handling
app.all("*", (req, res) => {
  res.status(400).json({
    success: false,
    message: `Route ${req.originalUrl} cannot found`,
    error: {
      code: 404,
      description: "Please provide an valid Route",
    },
  });
});

export default app;
