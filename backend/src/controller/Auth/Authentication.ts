import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Authentication} from "../../entity/Authentication";
// import { validate } from "class-validator";
import * as jwt from "jsonwebtoken";
// import {jwtSecret} from "../../config";
import * as dotenv from "dotenv";
dotenv.config();

export class AuthenticationController {
private userRepository = getRepository(Authentication);
async save(request: Request, response: Response, next: NextFunction) {

//Get parameters from the body
let { firstName, password,lastName,surname,email,phone, address,sexe,profession,imageUrls, role } = request.body;

if (!(firstName && lastName && surname && password && email && phone && address && sexe && profession && role && imageUrls)) return response.status(400).send({message: "You must send the user's email and password"});

try {
  let user = new Authentication();
  
  console.log(user);

  const emailExist = await this.userRepository.findOne({email});
  
  if(emailExist) return response.status(400).send({message:"Email existe déjà"});
  
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
    user.hashPassword();
  
    await this.userRepository.save(user);
    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role },process.env.jwtSecret,{ expiresIn: "6h" })
    const authUser = jwt.decode(token);
    response.status(201).send({message:"Utilisateur creé avec succes",token, authUser});

} catch (e) {
  throw new Error(e);
}
  // return this.userRepository.save(request.body);
}

async all(request: Request, response: Response, next: NextFunction) {
  try {
      console.log('VERIFY UPLOADS',request.body);
      return this.userRepository.find({
        where: { role: In(["USER"]) }
      });
  } catch (error) {
      console.log(error.message);
  }
 
}

async one(request: Request, response: Response, next: NextFunction) {
  let getUser = await this.userRepository.findOne(request.params.id);
  if(!getUser) throw Error('The user you are trying to find does not exist')
  return getUser;
}

async remove(request: Request, response: Response, next: NextFunction) {
  let userToRemove = await this.userRepository.findOne(request.params.id);
  if(!userToRemove) throw Error('The user you are trying to delete does not exist')
  await this.userRepository.remove(userToRemove);
}

async update(request: Request, response: Response, next: NextFunction) {
  let packageToUpdate = await this.userRepository.findOne(request.params.id);
  const {firstName, password,lastName,surname,email,phone, address,sexe,profession,imageUrls, role} = request.body;
  if(!packageToUpdate) throw Error('The user you are trying to update does not exist')
 const result = await this.userRepository.createQueryBuilder().update(Authentication).set({role}).where("id = :id", {id: request.params.id}).returning(["role"]).execute();
  console.log(result,'check the update issue');
  return result.raw[0]
}
}

