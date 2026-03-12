// Challenge 1 (Module 3)

function getRandomSet(m, n, allowDuplicates, sort) {
  let result = new Set();

  while (result.size < m) {
    const randomNum = Math.floor(Math.random() * (n + 1));
    result.add(randomNum);
    
    if (!allowDuplicates) {
      if (result.size === m) break; // no duplicates allowed, exit the loop once we have m unique numbers
    }
  }

  const resultArray = Array.from(result);
  
  if (sort) {
    resultArray.sort((a, b) => a - b); // Sort the array in ascending order
  }

  return resultArray;
}

console.log(getRandomSet(10, 20, false, false)); // Random set, no duplicates, unsorted
console.log(getRandomSet(10, 20, false, true));  // Random set, no duplicates, sorted
console.log(getRandomSet(10, 20, true, false));  // Random set, duplicates allowed, unsorted
console.log(getRandomSet(10, 20, true, true));   // Random set, duplicates allowed, sorted