import {getRepository,In,getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {BookingPackage} from "../entity/BookingPackage";

import {Package} from "../entity/Package";
import { Authentication } from '../entity/Authentication';
export class BookingPackageController {

    private userRepository = getRepository(BookingPackage);
    private packageRepository = getRepository(Package);
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
        const packId = request.params.packageId;
        const packages = await this.packageRepository.findOne({ // continue here
            where: {
                id: Number(packId)
            }
        });
        if(!packages){
            throw Error('Package you want to book does not exist')
        }
        console.log(packages,"Verify token")
       
        let {
       
        Visitor_details,
        bookedStartDate,
        bookedEndDate,
        ticketNumber,
        additionnalInformation,
        Status,
        id,
    } = request.body;
    if(bookedStartDate > bookedEndDate){
        throw Error('Start date cannot be greater than end date')
    }
   return await this.userRepository.save({
        Visitor_details,
        bookedStartDate,
        bookedEndDate,
        ticketNumber,
        additionnalInformation,
        Status,
        id,
        userId: auth,
        packageId:packages.id,
    });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The item you are trying to delete does not exist')
        const result =  await this.userRepository.createQueryBuilder().delete().from(BookingPackage).where("id = :id", {id: request.params.id}).execute();
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
            // packageId,
            // userId,
            Visitor_details,
            bookedStartDate,
           bookedEndDate,
            ticketNumber,
            additionnalInformation,
            Status} = request.body;
        if(!userToUpdate) throw Error('The user you are trying to update does not exist')
        if(bookedStartDate > bookedEndDate){
            throw Error('Start date cannot be greater than end date')
        }
       const result = await this.userRepository.createQueryBuilder().update(BookingPackage).set({
         Visitor_details,
         bookedStartDate,
        bookedEndDate,
         ticketNumber,
         additionnalInformation,
         Status
        }).where("id = :id", {id: request.params.id}).returning(["Visitor_details","bookedStartDate","bookedEndDate","ticketNumber","additionnalInformation","Status"]).execute();

        return result.raw[0]
    
    }

}