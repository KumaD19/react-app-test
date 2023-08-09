import React, { Component } from "react";
import Card from "./cards";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      setting: "State Has Been mounted",
      update: false,
    };
  }

  componentDidMount() {
    console.log("component has been mounted");
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log("ok2");
    if (this.state.update !== prevState.update) {
      setTimeout(() => {
        this.setState({ setting: "State Has been Updated" });
      }, 2000);
    }
  }



  render() {
    return (
      <>
        <p>{this.state.setting}</p>
        <button onClick={()=> this.setState({update:true})}>Update text above</button>
        <Card
          band="Los Retros"
          members="Marui Tapia"
          img="https://indiehoy.com/wp-content/uploads/2021/02/los-retros.jpg"
        />
        <Card
          band="The beatles"
          members="John Lennon, Paul Mcartney, Ringo Starr, George Harrison"
          img="https://ichef.bbci.co.uk/news/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp"
        />
        <Card
          band="Nirvana"
          members="Kurt Cobain, Krist Novoselic, Chad Channing"
          img="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-nirvana-e9e22e4b-f7d9-4fc7-bd94-23c30084ce94.jpg?w=910&h=511&crop=1"
        />
      </>
    );
  }
}

export const library = "React";

export default Main;