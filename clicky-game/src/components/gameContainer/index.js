import React, {Component} from "react";
import clickCards from "../../clickCards.json"
import Card from "../card";

class GameContainer extends Component {
    state = {
        cards: clickCards,
        score: 0
    };

    handleClick = (image) => {
        const newCards = this.state.cards.map(card => {
            if (card.image === image) {
                card.clicked = true;
            }
            return card;
        });
        this.setState({
            cards: this.shuffleArray(newCards), 
            score: this.state.score + 1
        })
        console.log(newCards);
    };

    

    shuffleArray = (cards) =>{
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    render() {
        return (
            <div>
                <img className="banner" src = "../assets/images/Banner-img.jpg"></img>
                <p className="score">Score: {this.state.score}</p>
                <div class="center">
                {this.state.cards.map(card => {
                    return (
                        <Card 
                        key = {card.letter}
                        image = {card.image}
                        clicked = {card.clicked}
                        handleClick = {this.handleClick}
                        />
                    );
                })}
                </div>
            </div>
        )
    }
}

export default GameContainer