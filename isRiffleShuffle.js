const createDeck = () => {
  let cards = [];

  for (var i = 1; i <= 52; i++) {
    cards.push(i);
  }

  return cards;
};

// uniformly random shuffle
const knuthShuffle = (deck) => {
  for (var i = 0; i < deck.length; i++) {
    var randomIndex = Math.floor(Math.random() * i);
    var otherCard = deck[randomIndex];
    deck[randomIndex] = deck[i];
    deck[i] = otherCard;
  }

  return deck;
};


const riffleShuffle = (deck) => {
  let shuffledDeck = [];
  let h1StartIndex = 0;
  let h2StartIndex = 26;

  while (shuffledDeck.length < 52) {
    if (h1StartIndex < 26) {
      let h1EndIndex = Math.floor(Math.random() * (26 - h1StartIndex)) + h1StartIndex + 1;
      shuffledDeck = shuffledDeck.concat(deck.slice(h1StartIndex, h1EndIndex));
      h1StartIndex = h1EndIndex; 
    }

    if (h2StartIndex < 52) {
      let h2EndIndex = Math.floor(Math.random() * (52 - h2StartIndex)) + h2StartIndex + 1;
      shuffledDeck = shuffledDeck.concat(deck.slice(h2StartIndex, h2EndIndex));
      h2StartIndex = h2EndIndex;
    }
  }

  return shuffledDeck;
};

const isRiffleShuffle = (deck) => {
  let firstHalf = 26;
  let secondHalf = 52;
  let cardIndex = deck.length - 1;

  // If the deck is a riffle shuffled deck, the card on
  // the top of the deck MUST be either the last card in 
  // the first half or the last card in the second half.
  // Keep popping off the top card and checking it against
  // Either top card, and decrement the number respectively.
  while (cardIndex >= 0) {
    let card = deck[cardIndex--];
    // If these conditions ever not hold true, then that means
    // the deck was not riffle shuffled.
    if (card === firstHalf) {
      firstHalf--;
    } else if (card === secondHalf) {
      secondHalf--;
    } else {
      return false;
    }
  }

  return true;
};

let deck = createDeck();
let riffleShuffledDeck = riffleShuffle(deck);
console.log(isRiffleShuffle(riffleShuffledDeck));