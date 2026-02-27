let counter = 0;
let maxValue = 10;
let result = 1;
debugger;
for (counter = 0; counter < maxValue; counter++) {
    console.log("Before multiply: ", result);
    result *= maxValue - counter - 1;

    console.log(
        "counter: ", counter,
        "| multiplier: ", maxValue - counter -1, // starts from descending iteration (9 to 0)
        "| result: ", result
    )
}
console.log("Final result: ", result); 