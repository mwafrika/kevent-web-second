import {ExpeditionController} from "../controller/ExpeditionController";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
import upload from '../middleware/multer';
import {checkRole} from "../middleware/checkRole";
import cloudinary from '../middleware/cloudinary';

export const Expeditions = [
    {
        method: "post",
        route: "/api/v1/expedition",
        controller: ExpeditionController,
        action: "save",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
            upload.array('imageUrls'),
            cloudinary,
        ]
    },

    {
        method: "get",
        route: "/api/v1/expeditions",
        controller: ExpeditionController,
        action: "all",
        validation:[]
    },
    {
        method: "get",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "one",
        validation:[]
    },
    {
        method: "delete",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "remove",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
        ]
    },
    {
        method: "put",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "update",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
            upload.array('imageUrls'),
            cloudinary,
        ]
    }
   
];