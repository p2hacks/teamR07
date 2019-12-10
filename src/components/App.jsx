import React from 'react';
import '../styles/App.css';
import Header from './areas/Header';
import Main from './page/Main';
import { BrowserRouter } from 'react-router-dom'


  
const App = () => {
  return (
    <div id="container">
          <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
    </div>
  )
}

export default App;