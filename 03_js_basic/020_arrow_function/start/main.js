function fn(number) {
  return number * 2;
}

console.log(fn(2));

// const fnArrow = (number) => {
//   return number * 2;
// }

// const fnArrow = number => number * 2;

const fnArrow = number => {
  console.log(number);
  return number * 2;
}

console.log(fnArrow(2));

const fnArrowObj = number => {
  return { return: number * 2 }
};
console.log(fnArrowObj(8));
