import React from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import shipments from "../shipments-data.js";
import risks from "../risks-data.js";
import ports from "../ports-data";
import MapDirectionsRenderer from '../components/MapDirections/MapDirectionsRenderer';


function ShipmentsMap() {
    const places = [
        { lat: 25.8103146, lng: -80.1751609 },
        { lat: 27.9947147, lng: -82.5943645 },
        { lat: 28.4813018, lng: -81.4387899 },
    ]
    const mapRef = React.useRef(null);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    // const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    //   lat: 0,
    //   lng: 0,
    // });
    React.useEffect(() => {
        let google = window.google;
        let map = mapRef.current;
        let lat = "0";
        let lng = "0";
        const center = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: zoom,
            center: center,
            scrollwheel: false,
            zoomControl: true,
        };

        map = new google.maps.Map(map, mapOptions);

        // const marker = new google.maps.Marker({
        //   position: myLatlng,
        //   map: map,
        //   animation: google.maps.Animation.DROP,
        //   title: "Light Bootstrap Dashboard PRO React!",
        // });
        let portsMap = {};
        ports.forEach(port => {
            portsMap[port.properties.portname] = {
                lat: port.properties.latitude,
                lng: port.properties.longitude
            }
        });
        const shipmentsDestPorts = shipments.map(shipment => {
            return {
                latlng: portsMap[shipment.port_destination_name],
                portName: shipment.port_destination_name,
            }
        });
    


        const markers = risks.map((risk) => new google.maps.Marker({
            position: {
                lat: risk.last_location.last_latitude,
                lng: risk.last_location.last_longitude
            },
            map: map,
            animation: google.maps.Animation.DROP,
        }));

        // const otherMarkers = places.map(place => new google.maps.Marker({
        //     position: place,
        //     map: map,
        // }));

        const contentString =
            '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
            "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        // google.maps.event.addListener(marker, "click", function () {
        //   infowindow.open(map, marker);
        // });
    }, []);
    return (
        <>
            <div className="map-container">
                <div id="map" ref={mapRef}></div>
                <MapDirectionsRenderer places={places} travelMode={window.google.maps.TravelMode.DRIVING} />
            </div>
        </>
    );
}

export default ShipmentsMap;
