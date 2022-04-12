import faker from 'faker';

export class Company {
    name: string;
    location: {
        latitude: number;
        longitud: number;
    };

    constructor(){
        this.name = faker.company.companyName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitud: parseFloat(faker.address.longitude())
        };
    };
}