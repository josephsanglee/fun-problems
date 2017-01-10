/*
Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

Write a function that, given:
1) an amount of money, and
2) an array of coin denominations

computes the number of ways to make amount of money with coins of the available denominations.
*/

// const makeChange = (amount, denominations) => {
//   //base case
//   if (amount === 0) {
//     return 1;
//   }

//   let count = 0;

//   //iterate through all the current available denominations
//   for (var i = 0; i < denominations.length; i++) {
//     //subtract the amount of a denomination from the current amount
//     amount -= denominations[i];
    
//     //if the amount is greater than -1, recurse function, but only
//     //with the current denomination and those after it. this condition
//     //allows us to not have to check solutions that we have already identified,
//     //only checking possible pathways we have not looked at yet
//     if (amount > -1) {
//       count += makeChange(amount, denominations.slice(i));
//     }

//     amount += denominations[i];
//   }

//   return count;
// };

const makeChange = (amount, denominations) => {
  const possibleWaysToMakeNAmount = [];

  // first set all possible ways to 0, and initially set
  // N=0 amount to 1. (or possibleWaysTOMakeNAmount[0] = 1)
  for (var i = 0; i <= amount; i++) {
    possibleWaysToMakeNAmount.push(0);
  }
  possibleWaysToMakeNAmount[0]++;

  //iterate through all possible coins
  for (var j = 0; j < denominations.length; j++) {
    let coin = denominations[j];

    // for every coin, you want to see if you can make the current amount
    // with the current denomination
    for (var highestAmount = coin; highestAmount <= amount; highestAmount++) {
      highestAmountRemainder = highestAmount - coin;
      possibleWaysToMakeNAmount[highestAmount] += possibleWaysToMakeNAmount[highestAmountRemainder];
    }
  }


  return possibleWaysToMakeNAmount[amount];
};

console.log(makeChange(4, [1, 2, 3])); // 4