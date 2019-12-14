import React from 'react';
import CardHa from '../elements/ CardChurch/CardHa';
import CardKa from '../elements/ CardChurch/CardKa';
import CardKitoku from '../elements/ CardChurch/CardKitoku';
import CardMira from '../elements/ CardChurch/CardMira';
import CardPa from '../elements/ CardChurch/CardPa';
import CardYo from '../elements/ CardChurch/CardYo';
import '../../styles/areas/AllCard.css';
import { name, url, image, description, latitude, longitude } from "../../database/Realbase"
//import Link from "react-router-dom";
/*const AllCard = () => {
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
}*/
class AllCard extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      name: null,
      url: null,
      image: null,
      description: null,
      latitude: null,
      longitude: null
  }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(id) { 
    switch (id) { 
      case 1:
        /*this.setState(
          {
            name: name(id),
            url: url(id),
            image: image(id),
            description: description(id),
            latitude: latitude(id),
            longitude: longitude(id)
          }
        );*/
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  }
  render() { 
    return (
      <div id='cards'>
        <div id='cardsContainer'>
          <div id='HaArea'>
            <CardHa onClick={this.clickHandler(1)}/>
          </div>
          <div id='KaArea'>
               <CardKa  onClick={this.clickHandler(2)}/>
          </div>
          <div id='KitokuArea'>
                <CardKitoku onClick={this.clickHandler(3)}/>
          </div>
          <div id='MiraArea'>
                <CardMira onClick={this.clickHandler(4)}/>
          </div>
          <div id='PaArea'>
                <CardPa onClick={this.clickHandler(5)}/>
          </div>
          <div id='YoArea'>
                <CardYo onClick={this.clickHandler(6)}/>
          </div>
        </div>     
      </div>
    );
  }
}
  
  export default AllCard;
  