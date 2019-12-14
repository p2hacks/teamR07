import React from "react";
import '../../styles/MapView.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
import marker_icon from '../../images/chapel.png';
import maker_yama from '../../images/mountain.png';
import maker_tree from '../../images/christmastree.png';
import maker_eki from '../../images/illumination.png';
class MapView extends React.Component {

    render() {
        const harisutosu = [41.762986, 140.712168]
        const yohane = [41.762650, 140.712801]
        const katorikku = [41.763690, 140.713262]
        const kyoudan = [41.764786, 140.713445]
        const bey = [41.767788, 140.717532]
        const perfect = [41.770700, 140.72477]
        const yama = [41.759595, 140.703885]
        const eki = [41.773772, 140.726357]
        const renga = [41.767006, 140.717216]
        const myIcon = L.icon({
            iconUrl: marker_icon,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
        const ekiIcon = L.icon({
            iconUrl: maker_eki,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
        const rengaIcon = L.icon({
            iconUrl: maker_tree,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
        const yamaIcon = L.icon({
            iconUrl: maker_yama,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
        return (
            <div className="MapView">
                <Map center={this.props.position} zoom={13} maxZoom={20}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />


                    <Marker position={harisutosu} icon={myIcon} >
                        <Popup>聖ハリストス正教会</Popup>
                    </Marker>
                    <Marker position={yohane} icon={myIcon} >
                        <Popup>函館聖ヨハネ教会</Popup>
                    </Marker>
                    <Marker position={katorikku} icon={myIcon} >
                        <Popup>カトリック函館元町教会</Popup>
                    </Marker>
                    <Marker position={kyoudan} icon={myIcon} >
                        <Popup>日本基督教団函館教会</Popup>
                    </Marker>
                    <Marker position={bey} icon={myIcon} >
                        <Popup>リラノートチャーチ ベイ函館</Popup>
                    </Marker>
                    <Marker position={perfect} icon={myIcon} >
                        <Popup>パーフェクトリバティー教団函館教会</Popup>
                    </Marker>
                    <Marker position={yama} icon={yamaIcon} >
                        <Popup>函館山</Popup>
                    </Marker>
                    <Marker position={renga} icon={rengaIcon} >
                        <Popup>クリスマスファンタジー</Popup>
                    </Marker>
                    <Marker position={eki} icon={ekiIcon} >
                        <Popup>函館駅前広場</Popup>
                    </Marker>

                </Map>
            </div>
        );
    }
}
export default MapView;