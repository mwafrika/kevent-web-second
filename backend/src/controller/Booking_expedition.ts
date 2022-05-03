import {getRepository,In,getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {BookingExpedition} from "../entity/Booking_expedition";
import {Expeditions} from "../entity/Expeditions";
import { Authentication } from '../entity/Authentication';
export class BookingExpeditionController {

    private userRepository = getRepository(BookingExpedition);
    private expeditionRepository = getRepository(Expeditions);
    async all(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('The user you are trying to get does not exist');
        if(user.role === 'ADMIN'){
            return await this.userRepository.find();
        }else{
            const userId = user.id;
            const userExpedition = await this.userRepository.find({ where: {userId: userId}})
            return userExpedition;
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('The user you are trying to get does not exist');
        if(user.role === 'ADMIN'){
            return await this.userRepository.findOne(request.params.id);
        }else{
            const userId = user.id;
            const userPackages = await this.userRepository.findOne({ where: {userId: userId}})
            return userPackages;
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId
        console.log('Auth user',auth);
        const expeditionId = request.params.expeditionId;
        const expeditions = await this.expeditionRepository.findOne({ // continue here
            where: {
                id: Number(expeditionId)
            }
        });
        if(!expeditions){
            throw Error('Package you want to book does not exist')
        }
        console.log(expeditions,"Verify token")
       
        let {
       
        Visitor_details,
        ticketNumber,
        additionnalInformation,
        Status,
        id,
    } = request.body;
    
   return await this.userRepository.save({
        Visitor_details,
        ticketNumber,
        additionnalInformation,
        Status,
        id,
        userId: auth,
        expeditionId:expeditions.id,
    });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        
    const auth = response.locals.jwtPayload.userId;
    const user = await getRepository(Authentication).findOne({ where: {id: auth}});
    if(user.role === 'ADMIN'){
        let userToRemove = await this.userRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The item you are trying to delete does not exist')
        const result =  await this.userRepository.createQueryBuilder().delete().from(BookingExpedition).where("id = :id", {id: request.params.id}).execute();
        if(result.affected === 1){
            // throw Error('The item you are trying to delete does not exist')
        response.status(204).json({
                status: "success",
                message: "Expedition deleted successfully",
         })
        }else{
            throw Error('Unable to delete expedition')
    }
    }else{
        const userId = user.id;
        const userPackages = await this.userRepository.findOne({ where: {userId: userId}})
        if(!userPackages) throw Error('The item you are trying to delete does not exist')
        // delete the bookPackage that belongs to the user using remove()

        const result =  await this.userRepository.remove(userPackages);
        console.log(result,"result")
        if(result){
            // throw Error('The item you are trying to delete does not exist')
        response.status(204).json({
                status: "success",
                message: "Expedition deleted successfully",
         })
        }else{
            throw Error('Unable to delete expedition')
    }
    }
} 
    

    async update(request: Request, response: Response, next: NextFunction) {
        
        let userToUpdate = await this.userRepository.findOne(request.params.id);
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        const { 
            Visitor_details,
            ticketNumber,
            additionnalInformation,
            Status} = request.body;

            if(user.role === 'ADMIN'){
                if(!userToUpdate) throw Error('The user you are trying to update does not exist')
               const result = await this.userRepository.createQueryBuilder().update(BookingExpedition).set({
                 Visitor_details,
                 ticketNumber,
                 additionnalInformation,
                 Status
                }).where("id = :id", {id: request.params.id}).returning(["Visitor_details","bookedStartDate","bookedEndDate","ticketNumber","additionnalInformation","Status"]).execute();
        
        
                response.status(200).json({
                    status: "success",
                    message: "Expedition updated successfully",
                    data: result.raw[0]
                })
                return response
            }else{
                if(!userToUpdate) throw Error('The user you are trying to update does not exist') 
                 const result = await this.userRepository.update(userToUpdate.id, {
                    Visitor_details,
                    ticketNumber,
                    additionnalInformation,
                    Status
                 })

                    response.status(200).json({
                        status: "success",
                        message: "Expedition updated successfully",
                        data: result.raw[0]
                    })
                    return response
            }
    
    }

}