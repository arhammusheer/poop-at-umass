import { Router } from "express";
import buildingController from "../controllers/building.controller";

const buildingRouter = Router();

/**
 * Get all buildings
 * GET /buildings
 */
buildingRouter.get("/", buildingController.getAllBuildings);

/**
 * Create a building
 * POST /buildings
 */
buildingRouter.post("/", buildingController.createBuilding);


export { buildingRouter };
