// import './App.css';
// //import pin from '../../images/pin.jpeg';
// import L from 'leaflet'
// function Map() {
//     const position = [41.773642, 140.726565]
//     const fukuonkan = [41.777206, 140.730397]
//     const map = (<Map center={position} zoom={13}>
//         <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />
//         <Marker position={fukuonkan}>
//             <Popup>Here is キリスト福音韓館<br />Easily customizable.</Popup>
//         </Marker>
//     </Map>
//     )
//     render(map, document.getElementById('map-container'))
//     return (
//         <>
// <div id="containar"></div>
//         </>
//     );
// }


// import './App.css';
// import pin from '../../images/pin.jpeg';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// function Map() {
//     const position = [41.773642, 140.726565]
//     const posi = [41.777206, 140.730397]

//     return (
//         <>
//             <Map center={position} zoom={15}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//                 />
//                 {
//                     <Marker position={posi}>
//                         <Popup >函館キリスト伏音福音館.<br />Easily customizable.</Popup>
//                     </Marker>
//                 }

//             </Map>
//         </>
//     );

// }
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

// class SimpleExample extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13 };

//   }



// function Map() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//         React.createElement(LeafletMap, { center: position, zoom: this.state.zoom },
//             React.createElement(TileLayer, {
//                 attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
//                 url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png"
//             }),

//             React.createElement(Marker, { position: position },
//                 React.createElement(Popup, null, "A pretty CSS3 popup. ",
//                     React.createElement("br", null), " Easily customizable.")))
//     );
// }
// ReactDOM.render(React.createElement(SimpleExample, null), document.getElementById('container'));
