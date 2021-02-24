import { request, Request, response, Response } from "express";

class UserController {
  async create(req: Request, res: Response) {
    const body = request.body;
    console.log(body);
    return response.send();
  }
}

export { UserController };
