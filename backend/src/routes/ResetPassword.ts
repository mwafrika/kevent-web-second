import {ResetMessageController} from "../controller/PasswordResetMessage";
import {PasswordResetController} from "../controller/PasswordReset";
import { param } from 'express-validator';
import {checkJwt} from "../middleware/auth";
export const ResetPassword = [
    {
        method: "post",
        route: "/api/v1/password-reset",
        controller: ResetMessageController,
        action: "save",
        validation:[]
        
    },
    {
        method: "post",
        route: "/api/v1/password-reset/:userId/:token",
        controller: PasswordResetController,
        action: "save",
        validation:[]
    },
];