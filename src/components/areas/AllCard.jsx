import React from 'react';
import Card_Ha from '../elements/ Card_Church/Card_Ha';
import Card_Ka from '../elements/ Card_Church/Card_Ka';
import Card_Kitoku from '../elements/ Card_Church/Card_Kitoku';
import Card_Mira from '../elements/ Card_Church/Card_Mira';
import Card_Pa from '../elements/ Card_Church/Card_Pa';
const AllCard = () => {
    return (
      <div id='cards'>
      <Card_Ha/>
      <Card_Ka/>
      <Card_Kitoku/>
      <Card_Mira/>
      <Card_Pa/>
      </div>
    )
  }
  
  export default AllCard;
  