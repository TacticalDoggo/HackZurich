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

        const image = require("assets/img/ship.png")

        const markers = risks.map((risk) => new google.maps.Marker({
            position: {
                lat: risk.last_location.last_latitude,
                lng: risk.last_location.last_longitude
            },
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
        }));
        
        const portIcon = require("assets/img/port-icon.png");
        const portMarkers = shipmentsDestPorts.map((port) => new google.maps.Marker({
            position: port.latlng,
            map:map,
            icon: portIcon,
        }));

        const riskCircles = risks.map((risk) => new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            center: {
                lat: risk.last_location.last_latitude,
                lng: risk.last_location.last_longitude
            },
            radius: 500000,
        }));

        const routesCoord = shipments.map(s => s.route_coord);
        let routes = routesCoord.map(r => r.map(r1 => {
            return {
                lat: r1[0],
                lng: r1[1]
            };
        }));
        shipments.forEach((s, index) => {
          routes[index].unshift({
              lat: risks[index].last_location.last_latitude,
              lng: risks[index].last_location.last_longitude,
          });
          routes[index].push(shipmentsDestPorts[index].latlng);  
        });

        const polyLines = routes.slice(0,2).map(route => new google.maps.Polyline({
            path: route,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map,
        }));

        const infowindows = risks.map((risk) => new google.maps.InfoWindow({
            content: risk.warning_text,
        }));
        markers.forEach((marker, index) => {
            google.maps.event.addListener(marker, "click", function () {
                infowindows[index].open(map, marker);
            });
        });

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
