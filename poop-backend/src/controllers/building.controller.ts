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

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      // Reject if id is not a number
      if (isNaN(parseInt(id))) {
        throw new Error("400:Id must be a number");
      }

      const building = await Building.getById(parseInt(id));
      res.json(respond(building));
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
