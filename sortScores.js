/********
** 
** You rank players in the game from highest to lowest score. So far you're using an algorithm 
** that sorts in O(nlogn) time, but players are complaining that their rankings aren't 
** updated fast enough. You need a faster sorting algorithm.
** 
** Write a function that takes:
** 1. an array of unsortedScores
** 2. the highestPossibleScore in the game
** and returns a sorted array of scores in less than O(nlogn) time.
**
********/

const sortScores = (scores, highestPossibleScore) => {
  const scoreCounts = [];

  // pre-populate the score counts with 0 count from 0 to highestPossibleScore
  for (let i = 0; i <= highestPossibleScore; i++) {
    scoreCounts.push(0);
  }

  // increase the count of each score by 1 when its encountered
  scores.forEach(score => scoreCounts[score]++);

  //create an empty array that the input scores will be entered in order
  const sortedScores = [];

  scoreCounts.forEach((count, score) => {
    for (let i = 0; i < count; i++) {
      sortedScores.push(score);
    }
  });

  return sortedScores;
};

let unsortedScores = [37, 89, 41, 65, 91, 53];
const highestPossibleScore = 100;

console.log(sortScores(unsortedScores, highestPossibleScore));
// returns [37, 41, 53, 65, 89, 91]