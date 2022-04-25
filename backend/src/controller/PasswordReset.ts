import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Token} from '../entity/Token';
import {Authentication} from '../entity/Authentication';
import * as bcrypt from "bcryptjs";

export class PasswordResetController {

    private userRepository = getRepository(Authentication);
    private TokenRepository = getRepository(Token)

    async save(request: Request, response: Response, next: NextFunction) {
        try {    
            const user = await this.userRepository.findOne(request.params.userId);
            console.log(user,'user');
            if (!user) throw Error("invalid link or expired");
    
            let token = await this.TokenRepository.findOne({where:{userId: user.id, token: request.params.token}});
            if (!token) throw Error("invalid link or expired");
           

            // user.password = request.body.password;
            user.password = await bcrypt.hash(request.body.password, 10);
            console.log(user.password,'reset my pass');
            await this.userRepository.save(user);
            await this.TokenRepository.delete(token);
            response.status(200).send({message:"password reset successfully"});
        } catch (error) {
            response.send({message: "An error occured"});
            console.log(error);
        }
    }
  
}