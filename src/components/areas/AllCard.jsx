import React from 'react';
import Card_Ha from '../elements/ Card_Church/Card_Ha';
import Card_Ka from '../elements/ Card_Church/Card_Ka';
import Card_Kitoku from '../elements/ Card_Church/Card_Kitoku';
import Card_Mira from '../elements/ Card_Church/Card_Mira';
import Card_Pa from '../elements/ Card_Church/Card_Pa';
import Card_Yo from '../elements/ Card_Church/Card_Yo';
import '../../styles/areas/AllCard.css';
const AllCard = () => {
    return (
      <div id='cards'>
        <div id='cardsContainer'>
          <div id='HaArea'>
      <Card_Ha/>
      </div>
      <div id='KaArea'>
      <Card_Ka/>
      </div>
      <div id='KitokuArea'>
      <Card_Kitoku/>
      </div>
      <div id='MiraArea'>
      <Card_Mira/>
      </div>
      <div id='PaArea'>
      <Card_Pa/>
      </div>
      <div id='YoArea'>
        <Card_Yo/>
        </div>
        </div>
     
      </div>
    )
  }
  
  export default AllCard;
  