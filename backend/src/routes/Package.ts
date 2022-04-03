import {PackageController} from "../controller/PackageController";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
import upload from '../middleware/multer';
import cloudinary from '../middleware/cloudinary';

export const Package = [
    {
        method: "post",
        route: "/api/v1/package",
        controller: PackageController,
        action: "save",
        validation:[
            checkJwt,
            upload.array('imageUrls'),
            cloudinary,
        ],
    },

    {
        method: "get",
        route: "/api/v1/packages",
        controller: PackageController,
        action: "all",
        validation:[
            checkJwt,
        ]
    },
    {
        method: "get",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "one",
        validation:[
            checkJwt
        ]
    },
    {
        method: "delete",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "remove",
        validation:[
            checkJwt
        ]
    },
    {
        method: "put",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "update",
        validation:[
            checkJwt,
            upload.array('imageUrls'),
            cloudinary,
        ]
    }
   
];