import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import routes from "./routes";
import * as helmet from "helmet";
import * as cors from "cors";
import {PORT} from './config'
import * as morgan from 'morgan';
import { validationResult } from 'express-validator';

createConnection()
.then(async connection => {
    // create express app
    const app = express();
    // app.use(helmet());
    app.use(morgan("tiny"));
    app.use(cors());
    
    app.use(bodyParser.json());

    const handleError = (err, req, res, next) =>{
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    }
    // register express routes from defined application routes
    routes.forEach(route => {
        (app as any)[route.method](route.route, 
            ...(route.validation || []),
            async (req: Request, res: Response, next: Function) => {
            try {
                const error = validationResult(req);
                if (!error.isEmpty()) {
                  return res.status(400).json({ errors: error.array() });
                }
                const result = await (new (route.controller as any))[route.action](req, res, next);
               res.json(result);
            } catch (error) {
                next(error)
            }
        },
     );

    });

    app.use(handleError)
 
    app.listen(PORT)

    console.log(`Express server has started on port ${PORT}`);

}).catch(error => console.log(error))