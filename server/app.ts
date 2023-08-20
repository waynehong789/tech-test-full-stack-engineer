import dbPool from './common/db';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CommonController } from './common/common.controller';
import { SpaceShipsController } from './spaceShips/spaceShips.controller';

const app = express();
const port = 5000;
const controllers: Array<CommonController> = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

controllers.push(new SpaceShipsController(app));

app.get('/', async (req: express.Request, res: express.Response) => {
    res.status(200);
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}, wait for the development server to be up...`);
    controllers.forEach((controller: CommonController) => {
        console.log(`Controller configured for ${controller.getName()}`);
    });
});