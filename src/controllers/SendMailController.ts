import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UserRepository";

class SendMailController {
  async execute(req: Request, res: Response) {
    const { email, survey_id } = req.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUserRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (!userAlreadyExists) {
      return res.status(400).json({
        error: "User does note exists",
      });
    }

    const surveyAlreadyExists = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!surveyAlreadyExists) {
      return res.status(400).json({
        error: "Survey does note exists",
      });
    }

    //Salvar as informações na tabela surveyUSer
    const surveyUser = surveysUserRepository.create({
      user_id: userAlreadyExists.id,
      survey_id,
    });
    await surveysUserRepository.save(surveyUser);
    return res.json(surveyUser);
  }
}

export { SendMailController };
