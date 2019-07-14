import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import "./App.css";


class App extends Component {

  state = {
    cards,
    score: 0,
    highScore: 0,
    message: ""
  };

  render() {
    return (
      <div>
        <Navbar
          highScore={this.state.highScore}
          score={this.state.score}
          message={this.state.message}
        />
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
