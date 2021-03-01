import { Router } from "express";
import { SendMailController } from "./src/controllers/SendMailController";
import { SurveysController } from "./src/controllers/SurveysController";
import { UserController } from "./src/controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);

router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

export { router };
