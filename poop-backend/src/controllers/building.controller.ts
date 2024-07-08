import { NextFunction, Request, Response } from "express";
import Building from "../core/building.core";
import { respond } from "../utils/formattedResponse";

const buildingController = {
  getAllBuildings: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const buildings = await Building.getAll();
      res.json(respond(buildings));
    } catch (error) {
      next(error);
    }
  },

  createBuilding: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, address } = req.body;
      const building = await Building.create(name, address);
      res.json(respond(building));
    } catch (error) {
      next(error);
    }
  },
};

export default buildingController;
