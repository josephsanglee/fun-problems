/*********
Given a number, convert the number to a roman numeral.
1 = I
5 = V
10 = X
50 = L
100 = C
500 = D
1000 = M

Valid inputs will range from [0...5000].
*********/


const romanNumeralGenerator = (num) => {
  let romanNumerals = '';

  //thousands
  let thousands = Math.floor(num / 1000);
  if (thousands > 0) {
    romanNumerals += 'M'.repeat(thousands);
  }
  num = num - thousands * 1000;

  //hundreds
  let hundreds = Math.floor(num / 100);
  if (hundreds > 0) {
    if (hundreds === 9) {
      romanNumerals = romanNumerals.slice(0, romanNumerals.length) + 'CM';
    } else if (hundreds >= 5) {
      romanNumerals += 'D' + 'C'.repeat(hundreds - 5);
    } else {
      romanNumerals += 'C'.repeat(hundreds);
    }
  }
  num = num - hundreds * 100;

  //tens
  let tens = Math.floor(num / 10);
  if (tens > 0) {
    if (tens === 9) {
      romanNumerals += 'XC';
    }
    else if (tens >= 5) {
      romanNumerals += 'L' + 'X'.repeat(tens - 5);
    } else {
      romanNumerals += 'X'.repeat(tens);
    }
  }
  num = num - tens * 10;

  //numbers less than 10
  if (num <= 3) {
    romanNumerals += 'I'.repeat(num);
  } else if (num === 4) {
    romanNumerals += 'IV';
  } else if (num >= 5 && num < 9) {
    romanNumerals += 'V' + 'I'.repeat(num - 5);
  } else {
    romanNumerals += 'IX';
  }

  return romanNumerals;
};

console.log(romanNumeralGenerator(2000)); //MM
console.log(romanNumeralGenerator(57)); //LVII
console.log(romanNumeralGenerator(110)); //CX
console.log(romanNumeralGenerator(2332)); //MMCCCXXXII
console.log(romanNumeralGenerator(3938)); //MMMCMXXXVIII
console.log(romanNumeralGenerator(4021)); //MMMMXXI
console.log(romanNumeralGenerator(3098)); //MMMXCVIII