import express from "express";
import { config } from "./config";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { buildingRouter } from "./routes/building.routes";
import { bathroomRouter } from "./routes/bathroom.routes";
import { reviewRouter } from "./routes/review.routes";

const app = express();

app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
    origin: [
      /croissant\.one$/,
      /localhost:\d+$/,
      "http://localhost:5173",
      ...config.ORIGINS,
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(helmet());

app.use("/buildings", buildingRouter);
app.use("/bathrooms", bathroomRouter);
app.use("/reviews", reviewRouter);

// Health check
app.get("/", (_, res) => {
  res.json({
    status: true,
  });
});

// Handle Errors
app.use((err: Error, _: any, res: any, __: any) => {
  /** Error Handling
   * Possible formats of error message:
   * 1. 400:Error message
   * 2. Error message
   */

  const errMessage = err.message.split(":");
  const statusCode = parseInt(errMessage[0]);

  const message =
    errMessage.length > 1 ? errMessage.slice(1).join(":") : errMessage[0];

  res.status(statusCode || 500).json({
    status: false,
    message,
  });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}!`);
});
