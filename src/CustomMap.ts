import { Mappable } from "../interfaces/Mappable"

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

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitud
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        });


    };
}