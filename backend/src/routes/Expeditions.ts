import {ExpeditionController} from "../controller/ExpeditionController";
import { param } from 'express-validator';
export const Expeditions = [
    {
        method: "post",
        route: "/api/v1/expedition",
        controller: ExpeditionController,
        action: "save",
        validation:[]
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
        validation:[]
    },
    {
        method: "put",
        route: "/api/v1/expeditions/:id",
        controller: ExpeditionController,
        action: "update",
        validation:[]
    }
   
];