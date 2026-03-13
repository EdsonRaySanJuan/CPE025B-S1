// Task 1: Recursive Deep Primitive Summation
// Create a function sumDeepStrictNumbers that accepts a multidimensional array (an array containing nested arrays to any depth). 
// The function must recursively traverse the entire structure and return the sum of all elements that are strictly of the Number data type. 
// You must explicitly ignore NaN, numeric strings, booleans, and nulls.

// Expected Output: 25

function sumDeepStrictNumbers(arr) {
    // Code Here
    let total=0;
    for (const item of arr){
        if(Array.isArray(item)){
            total += sumDeepStrictNumbers(item);
        }
        else if(typeof item === 'number' && !isNaN(item)){
            total += item;
        }
    }
    return total;
    
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));

