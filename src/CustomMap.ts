import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(HTMLElementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(HTMLElementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}