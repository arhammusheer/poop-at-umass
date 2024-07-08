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

  public static async create(name: string, address: string) {
    const building = await prisma.building.create({
      data: {
        name,
        address,
      },
    });

    return new Building(building);
  }

  public static async getById(id: number) {
    const building = await prisma.building.findUnique({
      where: {
        id,
      },
      include: {
        bathrooms: true,
      },
    });

    if (!building) {
      throw new Error("404:Building not found");
    }

    return new Building(building);
  }
}
