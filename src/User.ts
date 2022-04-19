import faker from 'faker';
import { Mappable } from '../interfaces/Mappable';

export class User implements Mappable {

    name: string;
    location: {
        latitude: number;
        longitud: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitud: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }

}