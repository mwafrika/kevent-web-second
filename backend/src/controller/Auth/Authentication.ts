import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Authentication} from "../../entity/Authentication";
import { validate } from "class-validator";
import * as jwt from "jsonwebtoken";
export class AuthenticationController {
private userRepository = getRepository(Authentication);
async save(request: Request, response: Response, next: NextFunction) {

//Get parameters from the body
let { firstName, password,lastName,surname,email,phone, address,sexe,profession,imageUrls, role } = request.body;
let user = new Authentication();
// user.id = id;
user.firstName = firstName;
user.lastName = lastName;
user.surname = surname;
user.password = password;
user.email = email;
user.phone = phone;
user.address = address;
user.sexe = sexe;
user.profession = profession;
user.imageUrls = imageUrls;
user.role = role;

const errors = await validate(user);
if (errors.length > 0) {
  response.status(400).send(errors);
  return;
}

user.hashPassword();
const userRepository = getRepository(Authentication);
try {
  await userRepository.save(user);
  const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, process.env.jwtSecret, { expiresIn: "1h" })
  const authUser =  jwt.decode(token);

  console.log(authUser,'authUser');

 return response.status(201).send({message:"User created",token, authUser});
} catch (e) {
  response.status(409).send("email already in use");
  return;
}
  return this.userRepository.save(request.body);
    }
}

