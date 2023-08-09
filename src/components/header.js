import React, { Component } from "react";


class HeaderExample extends Component{
    constructor(props){

        super();
      
    }

    render(){
        return (
            <section>
                <a>Home {this.props.lib}</a>
                <a>Shop</a>
                <a>Blog</a>
            </section>
        )
        
    }
}

export default HeaderExample;