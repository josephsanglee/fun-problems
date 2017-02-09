const rand7 = () => {
  return Math.ceil(Math.random() * 7);
};

const rand5 = () => {
  return Math.ceil((rand7() / 7) * 5);
};

const countOfOutputs = (func) => {
  let count = {};

  for (var i = 0; i < 1000000; i++) {
    let num = func();
    count[num] = count[num] ? count[num] + 1 : 1;
  }

  return count;
};

console.log(countOfOutputs(rand5));