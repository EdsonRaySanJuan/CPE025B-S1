function max(array) {
    let maxValue = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] > maxValue) {
            maxValue = array[i];
        }   
    }
    return maxValue;
}
console.log( max([1, 4, 6, 2])); // -> 6
console.log( max([10, 4, 6, 2])); // -> 6 

// The function max should return the largest number from the array given as an argument. As you can see, 
// in the second case it works incorrectly: instead of the value 10 we get 6. Using the debugger, trace the max function 
// execution step by step. Observe the values of the i and maxValue variables. Locate the problem and fix the code so that it works correctly.