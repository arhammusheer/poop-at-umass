import { Router } from "express";

const bathroomRouter = Router();

bathroomRouter.get("/", (req, res) => {
	res.send("GET /bathroom");
});

export { bathroomRouter };