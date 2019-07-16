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

  imageClick = event => {
    const currentCard = event.target;
    console.log(currentCard);
    // console.log(currentCard.getAttribute('value'));
    
    if (currentCard.getAttribute('value') === 'false') {
      currentCard.setAttribute('value', true);
      // console.log(currentCard.getAttribute('value'));
      this.setState({
        card: this.state.cards.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        score: this.state.score + 1,
        message: ""
      });
    }
    else {
      // console.log(this.state.cards, this.state.card)
      this.setState({
        card: this.state.cards.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        score: 0,
        message: "You already clicked me! Click an animal to try again.",
      });
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        })
      }
    }
  }

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
