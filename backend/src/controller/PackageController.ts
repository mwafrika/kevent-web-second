import {getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Package} from "../entity/Package";
import { Authentication } from '../entity/Authentication';
export class PackageController {

    private packageRepository = getRepository(Package);

    async all(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('User not found')
        if(user.role === 'ADMIN'){
        return this.packageRepository.find();
        }else{
            return this.packageRepository.find({where: {userId: auth}});
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        if(!user) throw Error('User not found')
        if(user.role === 'ADMIN'){
        return this.packageRepository.findOne(request.params.id);
        }else{
            return this.packageRepository.findOne({where: {userId: auth}});
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('VERIFY UPLOADS',request.body);
       
       try {
        let {price, description,imageUrls, itineraire, metadata,places, tags, title, created_at} = request.body;
        created_at = new Date();

        if(!price || !description || !imageUrls || !itineraire || !places || !tags || !title) throw Error('Tout les champs sont obligatoires')
        let user = this.packageRepository.create({price, description, itineraire,places, tags,imageUrls, title, metadata, created_at});
        const result = await this.packageRepository.save(user);
        console.log('RESULT',result);
        return result;

       } catch (error) {
       return response.status(400).send({error: "Package n'est pas valide"});
       }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
        
        if(user.role === 'ADMIN'){
            let userToRemove = await this.packageRepository.findOne(request.params.id);
            if(!userToRemove) throw Error('The item you are trying to delete does not exist')
            const result =  await this.packageRepository.createQueryBuilder().delete().from(Package).where("id = :id", {id: request.params.id}).execute();
            if(result.affected === 1){
            response.status(204).json({
                    status: "success",
                    message: "Expedition deleted successfully",
             })
            }else{
                throw Error('Unable to delete expedition')
        }
        
    }else{
        const userId = user.id;
        const userPackages = await this.packageRepository.findOne({ where: {userId: userId}})
        if(!userPackages) throw Error('The item you are trying to delete does not exist')
        // delete the bookPackage that belongs to the user using remove()
    
        const result =  await this.packageRepository.remove(userPackages);
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
        const auth = response.locals.jwtPayload.userId;
        const user = await getRepository(Authentication).findOne({ where: {id: auth}});
       
        if(user.role === 'ADMIN'){
            let userToUpdate = await this.packageRepository.findOne(request.params.id);
            const {price, description,imageUrls, itineraire, metadata,places, tags, title} = request.body;
            if(!userToUpdate) throw Error('The item you are trying to update does not exist')
            const result = await this.packageRepository.update(request.params.id, {
                price, description, itineraire,places, tags,imageUrls, title, metadata
            });
            if(result.affected === 1){
            response.status(204).json({
                    status: "success",
                    message: "Expedition updated successfully",
             })
            }else{
                throw Error('Unable to update expedition')
        }
        
    }else{
        const userId = user.id;
        const userPackages = await this.packageRepository.findOne({ where: {userId: userId}})
        if(!userPackages) throw Error('The item you are trying to update does not exist')
        // update the bookPackage that belongs to the user using update()
        const {price, description,imageUrls, itineraire, metadata,places, tags, title} = request.body;
        const result = await this.packageRepository.update(userPackages.id, {
            price, description, itineraire,places, tags,imageUrls, title, metadata
        });
        if(result.affected === 1){
        response.status(204).json({
                status: "success",
                message: "Expedition updated successfully",
                result: result.raw[0]
                
         })
        }else{
            throw Error('Unable to update expedition')
    }
    }

    //     let packageToUpdate = await this.packageRepository.findOne(request.params.id);
    //     const {price, description,imageUrls, itineraire, metadata,places, tags, title} = request.body;
    //     if(!packageToUpdate) throw Error('The user you are trying to update does not exist')
    //    const result = await this.packageRepository.createQueryBuilder().update(Package).set({
    //    title, price, description, itineraire, metadata,places, tags, imageUrls
    //     }).where("id = :id", {id: request.params.id}).returning(["id","title","description","price","imageUrls","itineraire","metadata","places","tags"]).execute();
        
    //     return result.raw[0]
    
    }

}