import { IQueryHandler } from "../../../common/common.query";
import  ShipRepository from "../../infrastructure/ship.repository";
import { getSpaceShips } from '../../infrastructure/spaceX.API';
import { GetAllShipsQuery } from "./getAllShipsQuery";

export default class GetAllShipsQueryHandler implements IQueryHandler<GetAllShipsQuery> {

    private shipRepository: ShipRepository;

    constructor() {
        this.shipRepository = new ShipRepository();
    }

    async execute(query: GetAllShipsQuery) {
        console.log('Async GetAllShipsQuery...');
        try {
            const ships = await this.shipRepository.all();
            if(ships && ships.values?.length)
            {
                return ships;
            }
            var spaceXShips = await getSpaceShips(query);
            return spaceXShips.data;
        } catch (err) {
            console.log('err', err);
            throw err;
        }
    }
}