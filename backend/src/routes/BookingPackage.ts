import {BookingPackageController} from "../controller/Booking_package";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
export const Packages = [
    {
        method: "post",
        route: "/api/v1/:packageId/bookPackage",
        controller: BookingPackageController,
        action: "save",
        validation:[
            checkJwt,
        ]
    },

    {
        method: "get",
        route: "/api/v1/bookPackages",
        controller: BookingPackageController,
        action: "all",
        validation:[]
    },
    {
        method: "get",
        route: "/api/v1/bookPackages/:id",
        controller: BookingPackageController,
        action: "one",
        validation:[]
    },
    {
        method: "delete",
        route: "/api/v1/bookPackages/:id",
        controller: BookingPackageController,
        action: "remove",
        validation:[]
    },
    {
        method: "put",
        route: "/api/v1/bookPackages/:id",
        controller: BookingPackageController,
        action: "update",
        validation:[]
    }
   
];