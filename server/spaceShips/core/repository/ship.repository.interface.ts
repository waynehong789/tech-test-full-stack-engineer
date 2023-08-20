import Ship from "../entity/ship";

export interface IShipRepository {
    all(): Promise<any>;
    create(data: Ship): Promise<string>;
}