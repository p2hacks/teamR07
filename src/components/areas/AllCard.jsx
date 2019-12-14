import React from 'react';
import CardHa from '../elements/ CardChurch/CardHa';
import CardKa from '../elements/ CardChurch/CardKa';
import CardKitoku from '../elements/ CardChurch/CardKitoku';
import CardMira from '../elements/ CardChurch/CardMira';
import CardPa from '../elements/ CardChurch/CardPa';
import CardYo from '../elements/ CardChurch/CardYo';
import '../../styles/areas/AllCard.css';
const AllCard = () => {
    return (
      <div id='cards'>
        <div id='cardsContainer'>
          <div id='HaArea'>
      <CardHa/>
      </div>
      <div id='KaArea'>
      <CardKa/>
      </div>
      <div id='KitokuArea'>
      <CardKitoku/>
      </div>
      <div id='MiraArea'>
      <CardMira/>
      </div>
      <div id='PaArea'>
      <CardPa/>
      </div>
      <div id='YoArea'>
        <CardYo/>
        </div>
        </div>
     
      </div>
    )
  }
  
  export default AllCard;
  