import faker from 'faker';

export class User {

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
}