import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Expeditions} from "../entity/Expeditions";

export class ExpeditionController {

    private userRepository = getRepository(Expeditions);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The item you are trying to delete does not exist')
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const {price, description,imageUrls, itineraire,places, tags, title,start_date, end_date, metadata} = request.body;
        if(!price || !description || !imageUrls || !itineraire || !places || !tags || !title) throw Error('Tout les champs sont obligatoires')
        const user = this.userRepository.create({price, description, itineraire,places, tags,imageUrls, title, metadata, start_date, end_date});
        const result = await this.userRepository.save(user);
        return result;
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
        const {price, description,imageUrls, itineraire,places, tags, title,start_date, end_date} = request.body;
        if(!userToUpdate) throw Error('The user you are trying to update does not exist')
       const result = await this.userRepository.createQueryBuilder().update(Expeditions).set({
        price, description, itineraire,places, tags,imageUrls, title,start_date, end_date
        }).where("id = :id", {id: request.params.id}).returning(["title","price", "description","imageUrls", "itineraire","places", "tags","start_date", "end_date"]).execute();

       return result.raw[0]
    
    }

}