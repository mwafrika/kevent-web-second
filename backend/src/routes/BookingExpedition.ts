import {BookingExpeditionController} from "../controller/Booking_expedition";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
export const Booking_expeditions = [
    {
        method: "post",
        route: "/api/v1/:expeditionId/bookExpedition",
        controller: BookingExpeditionController,
        action: "save",
        validation:[
            checkJwt,
        ]
    },

    {
        method: "get",
        route: "/api/v1/bookExpeditions",
        controller: BookingExpeditionController,
        action: "all",
        validation:[
            checkJwt,
        ]
    },
    {
        method: "get",
        route: "/api/v1/bookExpeditions/:id",
        controller: BookingExpeditionController,
        action: "one",
        validation:[
            checkJwt,
        ]
    },
    {
        method: "delete",
        route: "/api/v1/bookExpeditions/:id",
        controller: BookingExpeditionController,
        action: "remove",
        validation:[
            checkJwt,
        ]
    },
    {
        method: "put",
        route: "/api/v1/bookExpeditions/:id",
        controller: BookingExpeditionController,
        action: "update",
        validation:[
            checkJwt,
        ]
    }
   
];