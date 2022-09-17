import React from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import ports from "../ports-data.js";

function Maps() {
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
    const portsData = ports.map(f => {
      return {
        latlng: {
          lat: f.properties.latitude,
          lng: f.properties.longitude
        },
        portName: f.properties.portname,
      }
    });


    const markers = portsData.map(port => new google.maps.Marker({
      position: port.latlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: port.portName
    }));

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
      </div>
    </>
  );
}

export default Maps;
