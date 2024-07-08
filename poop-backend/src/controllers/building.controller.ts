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
};

export default buildingController;
