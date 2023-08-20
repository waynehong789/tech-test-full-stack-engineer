import { CommonController } from '../common/common.controller';
import express from 'express';
import GetAllShipsQueryHandler from './application/queries/getAllShipsQueryHandler';
import { GetAllShipsQuery } from './application/queries/getAllShipsQuery';

const SpaceShipsControllerName: string = "SpaceShipsController";

export class SpaceShipsController extends CommonController {

    constructor(app: express.Application) {
        super(app, SpaceShipsControllerName);
    }
    configureRoutes() {
        this.app.route(`/api/spaceShips`)
            .get(async (req: express.Request, res: express.Response) => {
                //console.log("/api/spaceShips", req)
                const query = new GetAllShipsQuery(
                    req.query?.type as string,
                    req.query?.port as string,
                    req.query?.weight as unknown as number,
                    req.query?.sort as string);
                const result = await new GetAllShipsQueryHandler().execute(query);
                res.status(200).send(result);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Add a new space ship`);
            });

        this.app.route(`/api/spaceShips/:shipId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /spaceShips/:shipId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.shipId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.shipId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.shipId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.shipId}`);
            });
        return this.app;
    }
}