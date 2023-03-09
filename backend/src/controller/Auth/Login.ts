import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Authentication} from "../../entity/Authentication";
import { validate } from "class-validator";
import * as jwt from "jsonwebtoken";
// import {jwtSecret} from "../../config";
import * as dotenv from "dotenv"

dotenv.config();
export class Login {
async save(request: Request, response: Response, next: NextFunction) {

    let { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).send({
        message: "email and password are required"
      });
    }

    //Get user from database
    const userRepository = getRepository(Authentication);
    let user: Authentication;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      response.status(400).send({
        message: "email or password incorrect"
      });
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      response.status(401).send({message: "email or password incorrect"});
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role, imageUrls: user.imageUrls  },process.env.jwtSecret,{ expiresIn: "6h" });
   const authUser = jwt.decode(token);
    //Send the jwt in the response
    response.send({token, authUser, message: "Connecté avec succès"});

}
}

