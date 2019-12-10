import React from 'react';
import MapView from '../area/MapView';
const Map = () => {
    const position = [41.773642, 140.726565]
    const posi=[41.777206, 140.730397]
    return (
        <div>
            <MapView position={position} posi={posi} />
          
        </div>
    )
}

export default Map;


