import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import "./App.css";


class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  render() {
    return (
      <div>
        {/* <Navbar
          score={this.state.score}
        /> */}
        <Header /> 
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              imageClick={this.scoreCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
