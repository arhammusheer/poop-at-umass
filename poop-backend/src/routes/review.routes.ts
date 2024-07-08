import { Router } from "express";

const reviewRouter = Router();

reviewRouter.get("/", (_, res) => {
  res.json({
    status: true,
    message: "Review route",
  });
});

export { reviewRouter };
