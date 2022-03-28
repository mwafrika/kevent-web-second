import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Package} from "../entity/Package";

export class PackageController {

    private packageRepository = getRepository(Package);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.packageRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.packageRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('VERIFY UPLOADS',request.body);
        return this.packageRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.packageRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The user you are trying to delete does not exist')
        await this.packageRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let packageToUpdate = await this.packageRepository.findOne(request.params.id);
        const {price, description,imageUrls, itineraire, metadata,places, tags} = request.body;
        if(!packageToUpdate) throw Error('The user you are trying to update does not exist')
       const result = await this.packageRepository.createQueryBuilder().update(Package).set({
        price, description, itineraire, metadata,places, tags, imageUrls
        }).where("id = :id", {id: request.params.id}).returning(["id","description","price","imageUrls","itineraire","metadata","places","tags"]).execute();
        
        return result.raw[0]
    
    }

}