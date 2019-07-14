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

  // imageClick = event => {
  //   const currentCard = event.target.alt;
  //       if (currentCard.clicked === false) {
  //         this.setState({
  //           card: this.state.card.sort(function(a, b) {
  //             return 0.5 - Math.random();
  //           }),
  //           score: 0,
  //           message: "You already clicked me! Click an animal to try again."
  //         });      
  //   }
  // }

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
              imageClick={this.imageClick}
              name={card.name}
              image={card.image}
              clicked={card.clicked}
              key={card.id}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
