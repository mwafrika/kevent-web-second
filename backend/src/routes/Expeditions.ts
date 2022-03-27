import {ExpeditionController} from "../controller/ExpeditionController";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
export const Expeditions = [
    {
        method: "post",
        route: "/api/v1/expedition",
        controller: ExpeditionController,
        action: "save",
        validation:[
            checkJwt
        ]
    },

    {
        method: "get",
        route: "/api/v1/expeditions",
        controller: ExpeditionController,
        action: "all",
        validation:[
            checkJwt
        ]
    },
    {
        method: "get",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "one",
        validation:[
            checkJwt
        ]
    },
    {
        method: "delete",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "remove",
        validation:[
            checkJwt
        ]
    },
    {
        method: "put",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "update",
        validation:[
            checkJwt
        ]
    }
   
];