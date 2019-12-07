import React from 'react';
import '../App.css';
import MapView from './MapView';
  
function App() {
  const position = [41.773642, 140.726565]
  const posi=[41.777206, 140.730397]
  return (
    <div className="App">
      <MapView position={position} posi={posi}/>
    </div>
  );
}

export default App;
