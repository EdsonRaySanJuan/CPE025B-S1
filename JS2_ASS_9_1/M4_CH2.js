// Challenge 2 (Module 4)

function myDecorator(func) {
  const calledArgs = new Set();

  return function (...args) {
    const key = JSON.stringify(args);
    if (calledArgs.has(key)) {
      console.log(`arguments already used: ${args.join(',')}`);
      return;
    }
    calledArgs.add(key);
    return func(...args);
  };
}

let sum = function (...args) {
  let retVal = 0;
  for (let arg of args) retVal += arg;
  return retVal;
};

let dfn = myDecorator(sum);

dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5);    // -> arguments already used: 4,5
