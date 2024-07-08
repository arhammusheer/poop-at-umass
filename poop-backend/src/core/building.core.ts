import { Building as IBuilding } from "@prisma/client";
import prisma from "../prisma";

export default class Building {
  id: number;
  name: string;
  address: string;

  createdAt: Date;
  updatedAt: Date;

  private constructor(building: IBuilding) {
    this.id = building.id;
    this.name = building.name;
    this.address = building.address;

    this.createdAt = building.createdAt;
    this.updatedAt = building.updatedAt;
  }

  public static async getAll() {
    const buildings = await prisma.building.findMany();

    return buildings.map((building) => new Building(building));
  }
}
