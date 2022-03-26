import {PackageController} from "../controller/PackageController";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
export const Package = [
    {
        method: "post",
        route: "/api/v1/package",
        controller: PackageController,
        action: "save",
        validation:[
            checkJwt,
        ]
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
        validation:[]
    },
    {
        method: "put",
        route: "/api/v1/packages/:id",
        controller: PackageController,
        action: "update",
        validation:[]
    }
   
];