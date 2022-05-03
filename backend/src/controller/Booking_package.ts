import {getRepository,In,getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {BookingPackage} from "../entity/BookingPackage";

import {Package} from "../entity/Package";
import { Authentication } from '../entity/Authentication';
export class BookingPackageController {

    private BookPackageRepo = getRepository(BookingPackage);
    private packageRepository = getRepository(Package);
    async all(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('The user you are trying to get does not exist');
        if(user.role === 'ADMIN'){
            return await this.BookPackageRepo.find();
        }else{
            const userId = user.id;
            const userPackages = await this.BookPackageRepo.find({ where: {userId: userId}})
            return userPackages;
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('The user you are trying to get does not exist');
        if(user.role === 'ADMIN'){
            return await this.BookPackageRepo.findOne(request.params.id);
        }else{
            const userId = user.id;
            const userPackages = await this.BookPackageRepo.findOne({ where: {userId: userId}})
            return userPackages;
        }
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
        response.status(400).send({message:'Start date cannot be greater than end date'})
    }
   return await this.BookPackageRepo.save({
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
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(user.role === 'ADMIN'){
            let userToRemove = await this.BookPackageRepo.findOne(request.params.id);
            if(!userToRemove) throw Error('The item you are trying to delete does not exist')
            const result =  await this.BookPackageRepo.createQueryBuilder().delete().from(BookingPackage).where("id = :id", {id: request.params.id}).execute();
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
            const userPackages = await this.BookPackageRepo.findOne({ where: {userId: userId}})
            if(!userPackages) throw Error('The item you are trying to delete does not exist')
            // delete the bookPackage that belongs to the user using remove()

            const result =  await this.BookPackageRepo.remove(userPackages);
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
        let userToUpdate = await this.BookPackageRepo.findOne(request.params.id);
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        const { 
            Visitor_details,
            bookedStartDate,
           bookedEndDate,
            ticketNumber,
            additionnalInformation,
            Status} = request.body;

            if(user.role === 'ADMIN'){
                if(!userToUpdate) throw Error('The user you are trying to update does not exist')
                if(bookedStartDate > bookedEndDate){
                   response.status(400).send({message:'Start date cannot be greater than end date'})
                }
               const result = await this.BookPackageRepo.createQueryBuilder().update(BookingPackage).set({
                 Visitor_details,
                 bookedStartDate,
                bookedEndDate,
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
                if(bookedStartDate > bookedEndDate){
                    response.status(400).send({message:'Start date cannot be greater than end date'})
                 }
                 const result = await this.BookPackageRepo.update(userToUpdate.id, {
                    Visitor_details,
                    bookedStartDate,
                    bookedEndDate,
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