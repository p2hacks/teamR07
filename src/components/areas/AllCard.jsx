import React from 'react';
import CardHa from '../elements/ CardChurch/CardHa';
import CardKa from '../elements/ CardChurch/CardKa';
import CardKitoku from '../elements/ CardChurch/CardKitoku';
import CardMira from '../elements/ CardChurch/CardMira';
import CardPa from '../elements/ CardChurch/CardPa';
import CardYo from '../elements/ CardChurch/CardYo';
import '../../styles/areas/AllCard.css';
import { Route } from 'react-router-dom';
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
          <a href={"/map_c"} >
            <CardHa onClick={this.clickHandler(1)}/>
            </a>
          </div>
          <div id='KaArea'>
          <a href={"/churchPage"} >
               <CardKa  onClick={this.clickHandler(2)}/>
               </a>
          </div>
          <div id='KitokuArea'>
          <a href={"/churchPage"} >
                <CardKitoku onClick={this.clickHandler(3)}/>
                </a>
          </div>
          <div id='MiraArea'>
          <a href={"/churchPage"} >
                <CardMira onClick={this.clickHandler(4)}/>
                </a>
          </div>
          <div id='PaArea'>
          <a href={"/churchPage"} >
                <CardPa onClick={this.clickHandler(5)}/>
                </a>
          </div>
          <div id='YoArea'>
          <a href={"/churchPage"} >
                <CardYo onClick={this.clickHandler(6)}/>
                </a>
          </div>
        </div>     
      </div>
    );
  }
}
  
  export default AllCard;
  