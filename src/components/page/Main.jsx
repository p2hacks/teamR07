import React/*, { useEffect } */from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import AnimeMatching from './AnimeMatching';
import ChurchDetail from './ChurchDetail';
import Map_C from './MapC';
import ChurchDescription from './ChurchDescription'




const Main = () => {
  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/}
    <Route exact path='/home' component={Home} />
    <Route path='/anime' component={AnimeMatching} />
      <Route path='/church' component={ChurchDetail} />
      <Route path='/church/churchPage' component={ChurchDescription} />
    <Route path='/mapC' component={Map_C} />
    </div>
  )
}

export default Main;
