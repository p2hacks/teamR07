import React from 'react';
import { name, url, image, description, latitude, longitude } from "../../../database/Realbase"

class Ha extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
           
        }
    }

    render() { 
        return (
            <>
                <h1>{name(1)}</h1>
                <img src={image(1)} alt="教会の画像" />
                <p>{description(1)}</p>
                <a href={url(1)}>{this.state.url}</a>
            </>
        );
    }
}

export default Ha;