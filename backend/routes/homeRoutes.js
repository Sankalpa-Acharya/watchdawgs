import express from "express";
import { homeController } from "../controllers/homeControllers.js";

const homeRouter = express.Router();

homeRouter.get("/", homeController);

export { homeRouter };
