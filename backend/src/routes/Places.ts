import {PlaceController} from "../controller/Places";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
import upload from '../middleware/multer';

export const Places = [
    {
        method: "post",
        route: "/api/v1/place",
        controller: PlaceController,
        action: "save",
        validation:[
            upload.single('imageUrls'),
            checkJwt],
    },

    {
        method: "get",
        route: "/api/v1/places",
        controller: PlaceController,
        action: "all",
        validation:[]
    },
    {
        method: "get",
        route: "/api/v1/places/:id",
        controller: PlaceController,
        action: "one",
        validation:[]
    },
    {
        method: "delete",
        route: "/api/v1/places/:id",
        controller: PlaceController,
        action: "remove",
        validation:[]
    },
    {
        method: "put",
        route: "/api/v1/places/:id",
        controller: PlaceController,
        action: "update",
        validation:[]
    }
   
];