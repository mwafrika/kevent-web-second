import {ContactUsController} from "../controller/ContactUs";

export const Places = [
    {
        method: "post",
        route: "/api/v1/contact-us",
        controller: ContactUsController,
        action: "save",
        validation:[],   
    },
    
];