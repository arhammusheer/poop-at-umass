import { Router } from "express";
import buildingController from "../controllers/building.controller";

const buildingRouter = Router();

/**
 * Get all buildings
 * GET /buildings
 */
buildingRouter.get("/", buildingController.getAllBuildings);

/**
 * Get a building by id (including bathrooms)
 * GET /buildings/:id
 */
buildingRouter.get("/:id", buildingController.getById);

/**
 * Create a building
 * POST /buildings
 */
buildingRouter.post("/", buildingController.createBuilding);

export { buildingRouter };
