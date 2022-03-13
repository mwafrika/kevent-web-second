import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Expeditions} from "../entity/Expeditions";

export class ExpeditionController {

    private userRepository = getRepository(Expeditions);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The item you are trying to delete does not exist')
        const result =  await this.userRepository.createQueryBuilder().delete().from(Expeditions).where("id = :id", {id: request.params.id}).execute();
        if(result.affected === 1){
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
        const {price, description, itineraire, metadata,places, tags} = request.body;
        if(!userToUpdate) throw Error('The user you are trying to update does not exist')
       const result = await this.userRepository.createQueryBuilder().update(Expeditions).set({
        price, description, itineraire, metadata,places, tags
        }).where("id = :id", {id: request.params.id}).returning(["*"]).execute();

        return result.raw[0]
    
    }

}