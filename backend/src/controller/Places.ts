import { getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Places} from "../entity/Places";

export class PlaceController {

    private placeRepository = getRepository(Places);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.placeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let item = await this.placeRepository.findOne(request.params.id);
        if(!item) throw Error('The item you are trying to get does not exist')
        await this.placeRepository.remove(item);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('VERIFY UPLOADS',request.body);
        return this.placeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.placeRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The item you are trying to delete does not exist')
        await this.placeRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let userToUpdate = await this.placeRepository.findOne(request.params.id);
        const {   name, description, addresse, tags,latLng, imageUrls} = request.body;
        if(!userToUpdate) throw Error('The item you are trying to update does not exist')
       const result = await this.placeRepository.createQueryBuilder().update(Places).set({
        name, description, addresse, tags,latLng, imageUrls
        }).where("id = :id", {id: request.params.id}).returning(["id","name","description","addresse","tags","latLng","imageUrls"]).execute();

        return result.raw[0]
    
    }

}

