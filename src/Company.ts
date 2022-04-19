import faker from 'faker';

import { Mappable } from '../interfaces/Mappable';

export class Company implements Mappable {
    name: string;
    cathPhrase: string;
    location: {
        latitude: number;
        longitud: number;
    };

    constructor(){
        this.name = faker.company.companyName();
        this.cathPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitud: parseFloat(faker.address.longitude())
        };
    };

    markerContent(): string {
        return `<div>
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchphrase: ${this.cathPhrase}</h3>
        </div>`
    }
}