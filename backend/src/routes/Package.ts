import {PackageController} from "../controller/PackageController";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
import upload from '../middleware/multer';
import cloudinary from '../middleware/cloudinary';
import {checkRole} from "../middleware/checkRole";

export const Package = [
    {
        method: "post",
        route: "/api/v1/package",
        controller: PackageController,
        action: "save",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
            upload.array('imageUrls'),
            cloudinary,
        ],
    },

    {
        method: "get",
        route: "/api/v1/packages",
        controller: PackageController,
        action: "all",
        validation:[]
    },
    {
        method: "get",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "one",
        validation:[]
    },
    {
        method: "delete",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "remove",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
        ]
    },
    {
        method: "put",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "update",
        validation:[
            checkJwt,
            checkRole(["ADMIN"]),
            upload.array('imageUrls'),
            cloudinary,
        ]
    }
   
];