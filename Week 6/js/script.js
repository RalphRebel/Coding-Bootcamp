/*
For the final project you will be creating an automated version of the classic card game WAR.
Think about how you would build this project and write your plan down. 
Consider classes such as Card, Deck, and Player and what fields and methods they might each have. 
You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
:::Deal 26 Cards to two Players from a Deck. 
:::Iterate through the turns where each Player plays a Card
:::The Player who played the higher card is awarded a point
:::Ties result in zero points for either Player
:::After all cards have been played, display the score.
:::Write Unit Tests using Mocha and Chai for each of the functions you write.
*/
/* HINT: Psuedo code block
instantiate new Deck
shuffle deck
instantiate 2 new Players
loop over cards in deck
  deal one card to player1
  deal one card to player2
end loop
loop through 26
  card1 = player1.flip()
  card2 = player2.flip()
  if card1 value > card2 value
    increase player1 score
  else if card2 value > card1 value
    increase player2 score
  end if
end loop
if player1 score is greater than player2 score
  show message player 1 wins
else if player2 score is greater than player1 score
  show message player 2 wins
else
  show message draw
end if
*/

class Player { //player class to describe playerA and playerB
  constructor(playerA, playerB) { //parameters to hold playerA and playerB
      this.playerA = playerA;
      this.playerB = playerB;
  }
  describe() { //describes the player
    for(let suit of suits) { //for loop
      for(let card of values) {
        this.cards.push(new Card(suit, card)); //pushing into array
      }
  }
  return `Player A has ${this.card} & Player B has ${this.card}.`; //template literal for our return
}

class Card { //card class
    constructor(suit, card) { //parameters to hold value
        this.suit = suit;
        this.card = card;
    }
}

class Deck { //deck class
    constructor() {
        this.cards = [];
    }

    createCard(suits, values) { //a deck within the deck class
      for(let suit of suits) { //for loop
        for(let card of values) {
          this.cards.push(new Card(suit, card)); //pushing into array
      }
    }
    return this.cards.length;
  }

  deal() { //let's us deal the new cards
    let hand = []; //blank array
    while(hand.length < 2) { //deals two cards for 2 people
      hand.push(this.cards.pop()); //push then pop after finish
    }
    return hand;
  }
  shuffle () { //let's us shuffle
    //this.cards.sort((a,b) => Math.random() - 0.5) //This won't sort by random
    let counter = this.cards.length, temp, i;
    
    while(counter) { //loop the cards
      i = Math.floor(Math.random() * counter--); //decrement 
      temp = this.cards[counter];
      this.cards[counter] = this.cards[i];
      this.cards[i] = temp;
    }

    return this.cards;
  }

}

var suits = [
'Hearts', 
'Spades', 
'Dia', 
'Clubs',
];
var values = [
'Ace', 
'King', 
'Queen', 
'Jack', 
10, 9, 8, 7, 6, 5, 4, 3, 2, 1
];

let cards = new Deck(suits, values);
cards.createCard(suits, values);
cards.shuffle();
console.log(cards.deal());