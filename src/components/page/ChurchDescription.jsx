import React from "react";

class ChurchDescription extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            name: props.name,
            url: props.url,
            image: props.image,
            description: props.description,
            llatitude: props.latitude,
            longitude: props.longitude
        }
    }

    render() { 
        return (
            <>
                <h1>{this.state.name}</h1>
                <img src={this.state.image} alt="教会の画像" />
                <p>{this.state.description}</p>
                <a href={this.state.url}>{this.state.url}</a>
            </>
        );
    }
}

export default ChurchDescription;