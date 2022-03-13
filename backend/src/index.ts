import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import {PORT} from './config'
import * as morgan from 'morgan';

createConnection().then(async connection => {

    // create express app
    const app = express();

    app.use(morgan("tiny"));
    app.use(bodyParser.json());

    const handleError = (err, req, res, next) =>{
res.status(err.statusCode || 500).send({
    message: err.message
})
    }
    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            try {
                const result = await (new (route.controller as any))[route.action](req, res, next);
                res.json(result);
            } catch (error) {
                next(error)
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.use(handleError)
 
    app.listen(PORT);
    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));

    console.log(`Express server has started on port ${PORT}`);

}).catch(error => console.log(error));
