import { Router } from "express";
import buildingController from "../controllers/building.controller";

const buildingRouter = Router();

/**
 * Get all buildings
 * GET /buildings
 */
buildingRouter.get("/", buildingController.getAllBuildings);

export { buildingRouter };
