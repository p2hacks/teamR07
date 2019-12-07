import React from "react";
import '../styles/MapView.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapView extends React.Component {  
    render() { 
        return (
            <div className="MapView">
                <Map center={this.props.position} zoom={13}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {
                        <Marker position={this.props.position}>
                            <Popup>函館キリスト伏音福音館.<br/>Easily customizable.</Popup>
                        </Marker>
                    } 
                </Map>
    </div>
        );
    }
}

export default MapView;