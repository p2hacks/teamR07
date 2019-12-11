import React from 'react';
import MapView from '../elements/MapView';
const Map_C = () => {
    const position = [41.773642, 140.726565]
    const posi = [41.776143, 140.730720]
   // const posi = [41.776100, 140.730700]
    return (
        <div>
            <MapView position={position} posi={posi} />

        </div>
    )
}

export default Map_C


