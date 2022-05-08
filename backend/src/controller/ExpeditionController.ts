import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Expeditions} from "../entity/Expeditions";

export class ExpeditionController {

    private expeditionRepository = getRepository(Expeditions);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.expeditionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let expeditionToRemove = await this.expeditionRepository.findOne(request.params.id);
        if(!expeditionToRemove) throw Error('The item you are trying to delete does not exist')
        return this.expeditionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const {price, description,imageUrls, itineraire,places,available, tags, title,start_date, end_date, metadata} = request.body;
        if(!price || !description || !imageUrls || !itineraire || !places || !tags || !title || !available) throw Error('Tout les champs sont obligatoires')
        const expedition = this.expeditionRepository.create({price, description,available, itineraire,places, tags,imageUrls, title, metadata, start_date, end_date});
        const result = await this.expeditionRepository.save(expedition);
        return result;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let expeditionToRemove = await this.expeditionRepository.findOne(request.params.id);
        if(!expeditionToRemove) throw Error('The item you are trying to delete does not exist')
        const result =  await this.expeditionRepository.createQueryBuilder().delete().from(Expeditions).where("id = :id", {id: request.params.id}).execute();
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
        let expeditionToUpdate = await this.expeditionRepository.findOne(request.params.id);
        const {price, description,imageUrls, itineraire,places,available, tags, title,start_date, end_date} = request.body;
        if(!expeditionToUpdate) throw Error('The expedition you are trying to update does not exist')
       const result = await this.expeditionRepository.createQueryBuilder().update(Expeditions).set({
        price, description, itineraire,places, tags,imageUrls,available, title,start_date, end_date
        }).where("id = :id", {id: request.params.id}).returning(["title","price", "description","imageUrls","available", "itineraire","places", "tags","start_date", "end_date"]).execute();

       return result.raw[0]
    
    }

}