import {ContactUsController} from "../controller/ContactUs";

export const ContactUs = [
    {
        method: "post",
        route: "/api/v1/expeditions/:id",
        controller: ContactUsController,
        action: "save",
        validation:[],   
    },
    
];