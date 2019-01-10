import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/index";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper/index"
import Card from "./components/Card/index"


class App extends Component {
  
  state = {
    cards,
    score: 0,
    topScore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over!!! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  
  click = id => {
    
    console.log(cards)
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].id === id) {
        console.log(cards[i].count);
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score: this.state.score + 1}, () => {
            //console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore}>Clicky Game: LOTR Edition</Header>

        
        {this.state.cards.map(card => (
          <Card
            click={this.click}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}

      </Wrapper>


    );
  }
}

export default App;
