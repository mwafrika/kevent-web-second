import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Token} from '../entity/Token';
import {Authentication} from '../entity/Authentication';
import * as crypto from 'crypto'
import sendEmail from '../utils/sendEmail';
import {PORT} from '../config';

export class ResetMessageController {

    private userRepository = getRepository(Authentication);
    private TokenRepository = getRepository(Token)
    
    async save(request: Request, response: Response, next: NextFunction){
        try {    
            const user = await this.userRepository.findOne({where:{email: request.body.email }});
            
            if (!user) return response.status(400).send("user with given email doesn't exist");
            console.log(user,'user');
            let token = await this.TokenRepository.findOne({where:{userId: user.id} });
            if (!token) {
                token = new Token();
                token.userId = user.id;
                token.token = crypto.randomBytes(32).toString("hex");
                token.createdAt = new Date(Date.now() + 3600);
                await this.TokenRepository.save(token);
            }
            console.log(token.token,'token', user.id,'user id', user.email);
            const link = `http://localhost:${PORT}/api/v1/password-reset/${user.id}/${token.token}`;
            await sendEmail(user.email, "Password reset", link);
    
            response.send("password reset link sent to your email account");
        } catch (error) {
            response.send("An error occured");
            console.log(error);
        }
    }


}