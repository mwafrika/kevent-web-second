import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Package} from "../entity/Package";

export class PackageController {

    private userRepository = getRepository(Package);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('VERIFY UPLOADS',request.body);
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        if(!userToRemove) throw Error('The user you are trying to delete does not exist')
        await this.userRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let userToUpdate = await this.userRepository.findOne(request.params.id);
        const {price, description,imageUrls, itineraire, metadata,places, tags} = request.body;
        if(!userToUpdate) throw Error('The user you are trying to update does not exist')
       const result = await this.userRepository.createQueryBuilder().update(Package).set({
        price, description, itineraire, metadata,places, tags, imageUrls
        }).where("id = :id", {id: request.params.id}).returning(["id","description","price","imageUrls","itineraire","metadata","places","tags"]).execute();

        return result.raw[0]
    
    }

}