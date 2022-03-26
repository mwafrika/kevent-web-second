import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Authentication} from "../../entity/Authentication";
import { validate } from "class-validator";
import * as jwt from "jsonwebtoken";

export class Login {
async save(request: Request, response: Response, next: NextFunction) {

    let { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(Authentication);
    let user: Authentication;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      response.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      response.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign({ userId: user.id, email: user.email },process.env.jwtSecret,{ expiresIn: "1h" }
    );
   const authUser = jwt.decode(token);
    //Send the jwt in the response
    response.send({token, authUser});
}
}

