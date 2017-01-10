const knuthShuffle = (deck) => {
  for (var i = 0; i < deck.length; i++) {
    var randomIndex = Math.floor(Math.random() * i);
    var otherCard = deck[randomIndex];
    deck[randomIndex] = deck[i];
    deck[i] = otherCard;
  }

  return deck;
};


console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(knuthShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));