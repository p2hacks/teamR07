import React from 'react';
import MapView from '../elements/MapView';
import '../../styles/page/Map_C.css';

const MapC = () => {
    const position = [41.773642, 140.726565]
    const posi = [41.776143, 140.730720]
    // const posi = [41.776100, 140.730700]
    return (
        <div>
            <MapView position={position} posi={posi} />

        </div>
    )
}

export default MapC


