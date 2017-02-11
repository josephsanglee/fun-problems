/**

Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines; 
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.



 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  const ransomNoteChars = {};
  const magazineChars = {};

  //iterate through all of the characters in the magazine and ransomNote
  for (var i = 0; i < magazine.length; i++) {
    let rnChar = ransomNote[i];
    let mChar = magazine[i];
    
    //if the ransomNote is shorter than the magazine, then some will chars will not need to be checked
    //explanation of ternary expression below
    if (rnChar) {
      ransomNoteChars[rnChar] = ransomNoteChars[rnChar] ? ransomNoteChars[rnChar] + 1 : 1;
    }
    
    //if the char has not yet been added to the object as a key, add it to the object 
    //and instantiate the value to one. if it is already a key the object, increase the count by one
    magazineChars[mChar] = magazineChars[mChar] ? magazineChars[mChar] + 1 : 1;
  }

  //check if the count of each char found in the ransom note is the same or less than
  //the count of the same char in the magazine. If not, the ransom note cannot be made
  for (let char in ransomNoteChars) {
    if (!magazineChars[char] || ransomNoteChars[char] > magazineChars[char]) return false;
  }

  return true;
};