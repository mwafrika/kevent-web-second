import {AuthenticationController} from "../controller/Auth/Authentication";
import {Login} from "../controller/Auth/Login";
import { param } from 'express-validator';
import upload from '../middleware/multer';
import cloudinary from '../middleware/cloudinary';

export const Users = [
    
{
    method: "post",
    route: "/api/v1/signup",
    controller: AuthenticationController,
    action: "save",
    validation:[
        upload.array('imageUrls'),
        cloudinary,
    ]
},
{
    method: "post",
    route: "/api/v1/signin",
    controller: Login,
    action: "save",
    validation:[]

}
];