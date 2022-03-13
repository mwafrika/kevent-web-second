import {BookingPackageController} from "../controller/Booking_package";
import { param } from 'express-validator';
export const Expeditions = [
    {
        method: "post",
        route: "/api/v1/bookPackage",
        controller: BookingPackageController,
        action: "save",
        validation:[]
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