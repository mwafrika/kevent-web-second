import {getRepository,In,getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {BookingExpedition} from "../entity/Booking_expedition";
import {Expeditions} from "../entity/Expeditions";

export class BookingExpeditionController {

    private userRepository = getRepository(BookingExpedition);
    private expeditionRepository = getRepository(Expeditions);
    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let item = await this.userRepository.findOne(request.params.id);
        if(!item) throw Error('The item you are trying to get does not exist')
        return this.userRepository.findOne(request.params.id);
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
} 
    

    async update(request: Request, response: Response, next: NextFunction) {
        let userToUpdate = await this.userRepository.findOne(request.params.id);
        const userId = await this.userRepository.findOne(request.params.id);
        const { 
            Visitor_details,
            ticketNumber,
            additionnalInformation,
            Status} = request.body;
        if(!userToUpdate) throw Error('The user you are trying to update does not exist')
       const result = await this.userRepository.createQueryBuilder().update(BookingExpedition).set({
         Visitor_details,
         ticketNumber,
         additionnalInformation,
         Status
        }).where("id = :id", {id: request.params.id}).returning(["Visitor_details","bookedStartDate","bookedEndDate","ticketNumber","additionnalInformation","Status"]).execute();

        return result.raw[0]
    
    }

}