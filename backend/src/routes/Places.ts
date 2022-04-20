import {PlaceController} from "../controller/Places";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
import upload from '../middleware/multer';
import cloudinary from '../middleware/cloudinary';

export const Places = [
    {
        method: "post",
        route: "/api/v1/place",
        controller: PlaceController,
        action: "save",
        validation:[
            checkJwt,
            upload.array('imageUrls'),
            cloudinary,
        ],
            
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
        validation:[
            checkJwt,
        ]
    },
    {
        method: "put",
        route: "/api/v1/places/:id",
        controller: PlaceController,
        action: "update",
        validation:[
            checkJwt,
            upload.array('imageUrls'),
            cloudinary,
        ]
    }
   
];