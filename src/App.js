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
    message: "",
    clicked: []
  };

  imageClick = event => {
    const currentCard = event.target;
    const clickChecker = this.state.clicked.indexOf(currentCard) > -1;

    if (!clickChecker) {
      this.setState({
        card: this.state.cards.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        score: this.state.score + 1,
        message: "",
        clicked: this.state.clicked.concat(
          currentCard
        )
      }, () => {
        if (this.state.score === 12) {
          this.setState({
            card: this.state.cards.sort(function (a, b) {
              return 0.5 - Math.random();
            }),
            message: "Nice job! You got all 12! Click an animal to play again!",
            highScore: this.state.score,
            score: 0,
            clicked: []
          })
        }
      })
      console.log(this.state.clicked)
    }
    else {
      this.setState({
        card: this.state.cards.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        score: 0,
        message: "You already clicked me! Click an animal to try again.",
        clicked: []
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
