import {AuthenticationController} from "../controller/Auth/Authentication";
import {Login} from "../controller/Auth/Login";
import { param } from 'express-validator';
export const Users = [
    
{
    method: "post",
    route: "/api/v1/signup",
    controller: AuthenticationController,
    action: "save",
    validation:[]

},
{
    method: "post",
    route: "/api/v1/signin",
    controller: Login,
    action: "save",
    validation:[]

}
];