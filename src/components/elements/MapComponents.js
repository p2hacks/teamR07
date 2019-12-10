import './App.css';
import pin from '../../images/pin.jpeg';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

function Map() {
    const position = [41.773642, 140.726565]
    const posi = [41.777206, 140.730397]

    return (
        <>
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                    <Marker position={posi}>
                        <Popup url={pin} width="2000" height="100"
                        >函館キリスト伏音福音館.<br />Easily customizable.</Popup>
                    </Marker>
                }

            </Map>
        </>
    );

}
