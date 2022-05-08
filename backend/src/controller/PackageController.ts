import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Package} from "../entity/Package";
import { Authentication } from '../entity/Authentication';
export class PackageController {

    private packageRepository = getRepository(Package);

    async all(request: Request, response: Response, next: NextFunction) {
       
        return this.packageRepository.find();
        
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const packages = this.packageRepository.findOne(request.params.id);
        if(!packages) throw Error('packages not found')
        return packages;
        
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('VERIFY UPLOADS',request.body);
       
       try {
        let {price, description,imageUrls,available, itineraire, metadata,places, tags, title, created_at} = request.body;
        created_at = new Date();

        if(!price || !description || !imageUrls || !itineraire || !places || !tags || !title || !available) throw Error('Tout les champs sont obligatoires')
        let packages = this.packageRepository.create({price, description,available, itineraire,places, tags,imageUrls, title, metadata, created_at});
        const result = await this.packageRepository.save(packages);
        console.log('RESULT',result);
        return result;

       } catch (error) {
       return response.status(400).send({error: "Package n'est pas valide"});
       }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
      
        
            let packagesToRemove = await this.packageRepository.findOne(request.params.id);
            if(!packagesToRemove) throw Error('The item you are trying to delete does not exist')
            const result =  await this.packageRepository.createQueryBuilder().delete().from(Package).where("id = :id", {id: request.params.id}).execute();
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
        let packageToUpdate = await this.packageRepository.findOne(request.params.id);
        const {price, description,imageUrls, itineraire, metadata,places, tags,available, title} = request.body;
        if(!packageToUpdate) throw Error('The packages you are trying to update does not exist')
       const result = await this.packageRepository.createQueryBuilder().update(Package).set({
       title, price, description, itineraire, metadata,places, tags, imageUrls,available
        }).where("id = :id", {id: request.params.id}).returning(["id","title","description","price","imageUrls","itineraire","metadata","available","places","tags"]).execute();
        
        return result.raw[0]
    
    }

}