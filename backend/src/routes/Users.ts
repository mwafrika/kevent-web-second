import {AuthenticationController} from "../controller/Auth/Authentication";
import {Login} from "../controller/Auth/Login";
import upload from '../middleware/multer';
import cloudinary from '../middleware/cloudinary';
import {checkRole} from "../middleware/checkRole";
import {checkJwt} from "../middleware/auth";

export const Users = [
    
{
    method: "post",
    route: "/api/v1/signup",
    controller: AuthenticationController,
    action: "save",
    validation:[
        upload.array('imageUrls'),
        cloudinary,
    ]
},
{
    method: "post",
    route: "/api/v1/signin",
    controller: Login,
    action: "save",
    validation:[]

},
{
    method: "get",
    route: "/api/v1/users",
    controller: AuthenticationController,
    action: "all",
    validation:[
        checkJwt,
        checkRole(["ADMIN"]),
    ]
},
{
    method: "get",
    route: "/api/v1/users/:id",
    controller: AuthenticationController,
    action: "one",
    validation:[
        checkJwt,
        checkRole(["ADMIN"]),
    ]
},
{
    method: "delete",
    route: "/api/v1/users/:id",
    controller: AuthenticationController,
    action: "remove",
    validation:[
        checkJwt,
        checkRole(["ADMIN"]),
    ]
},
{
    method: "put",
    route: "/api/v1/users/:id",
    controller: AuthenticationController,
    action: "update",
    validation:[
        checkJwt,
        checkRole(["ADMIN"]),
    ]
}
];