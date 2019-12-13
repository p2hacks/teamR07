import React from "react";
import '../../styles/MapView.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
class MapView extends React.Component {

    render() {
        const myIcon = L.icon({
            // /Users/wakamatsutaketo/Desktop/teamR07/src/components/elements/MapView.js
            // / Users / wakamatsutaketo / Desktop / teamR07 / src / images / pin.jpeg
            iconUrl: '../../images/pin.jpeg',
            iconSize: [95, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        return (
            <div className="MapView">
                <Map center={this.props.position} zoom={13} maxZoom={20}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />

                    <Marker position={this.props.posi} icon={myIcon} >
                        <Popup>函館キリスト伏音福音館</Popup>
                    </Marker>

                </Map>
            </div>
        );
    }
}
export default MapView;