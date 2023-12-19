import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./router";

const app: Application = express();

//using middleware
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", router);

// landing or testing route
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
