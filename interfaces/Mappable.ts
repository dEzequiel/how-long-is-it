export interface Mappable {
    location: {
        latitude: number,
        longitud: number
    }
    markerContent(): string;
}