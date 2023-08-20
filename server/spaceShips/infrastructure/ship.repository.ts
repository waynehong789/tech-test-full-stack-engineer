import Ship, { IShip } from "../core/entity/ship";
import { IShipRepository } from "../core/repository/ship.repository.interface";
import dbPool from '../../common/db';

export default class ShipRepository implements IShipRepository {
    
    async all(): Promise<any> {
        return await dbPool.query('SELECT * FROM spaceData');
    }
    
    async create(data: Ship): Promise<string> {
        const result = await dbPool.query('INSERT INTO spaceData SET ?', data, (error, results, fields) => {
            if(error) throw error;
        })
        return new Promise(() => {data.ship_id});
    }

}