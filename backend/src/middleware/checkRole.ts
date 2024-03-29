import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
// import {jwtSecret} from "../config";
import { Authentication } from "../entity/Authentication";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    //Get user role from the database
    const userRepository = getRepository(Authentication);
    let user: Authentication;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next();
    else res.status(401).send({
        message: "You don't have permission to access this resource",
    });
  };
};