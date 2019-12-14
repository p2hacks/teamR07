import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Map_C from './MapC';
import ChurchDescription from './ChurchDescription'
import Home from './Home'
import Church from './ChurchDetail'
import ChurchDetail from './ChurchDetail';




const Main = () => {
  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/}
    <Route path='/churchPage' component={ChurchDescription} />
    <Route path='/map_c' component={Map_C} />
    <Route path='/home' component={Home} />
    <Route path='/church' component={ChurchDetail} />
    </div>
  )
}

export default Main;
