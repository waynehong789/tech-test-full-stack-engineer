export interface IShip {
    ship_id: string
    ship_name: string
    ship_type: string
    ship_class: number
    weight_kg: number
    home_port: string
    image?: string
}

export default class Ship implements IShip {
    ship_id: string
    ship_name: string
    ship_type: string
    ship_class: number
    weight_kg: number
    home_port: string
    image?: string
    constructor(id: string, name: string, type: string, shipClass: number, weight: number, port: string, image: string) {
        this.ship_id = id;
        this.ship_name = name;
        this.ship_type = type;
        this.ship_class = shipClass;
        this.weight_kg = weight;
        this.home_port = port;
        this.image = image;
    }
}