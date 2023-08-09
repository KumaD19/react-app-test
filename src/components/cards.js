import React, { Component } from "react";

class Card extends Component{
    constructor (props){
        super();

        
    }


    render(){
        const {band, members, img, alt} = this.props;
        return (
            <div>
                <h3>Band name/Artist: {band} </h3>
                <h4>Members: {members}</h4>
                <img src={img} alt={alt}/>
            </div>
        )
    }
}

export default Card;