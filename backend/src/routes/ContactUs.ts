import {ContactUsController} from "../controller/ContactExpedition";
import{ContactUsPackageController} from '../controller/ContactPackage';

export const ContactUs = [
    {
        method: "post",
        route: "/api/v1/expeditions/:id",
        controller: ContactUsController,
        action: "save",
        validation:[],   
    },

    {
        method: "post",
        route: "/api/v1/packages/:id",
        controller: ContactUsPackageController,
        action: "save",
        validation:[],   
    },
    
];