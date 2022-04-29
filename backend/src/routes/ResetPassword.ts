import {ResetMessageController} from "../controller/PasswordResetMessage";
import {PasswordResetController} from "../controller/PasswordReset";

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