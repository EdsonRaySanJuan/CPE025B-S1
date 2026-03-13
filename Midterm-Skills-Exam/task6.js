// Task 6: Case-Insensitive Unique Character
// Write firstUniqueChar to find the first character in a string that appears only once. 
// The search must be case-insensitive (e.g., 's' and 'S' are the same), but the function must return 
// the character in its original casing from the string. An O(n2) nested loop solution is considered 
// inefficient for this level; use a frequency map.

// Expected Output: T
// Expected Output: c

function firstUniqueChar(str) {
    // Code Here
    const lower = str.toLowerCase();
    const freq = {}
    for(let i=0; i <lower.length; i++){
        const char = lower[i];
        freq[char]=(freq[char] || 0)+1; 
    }

    for(let i=0; i<lower.length; i++){
        if (freq[lower[i]] ===1){
            return str[i];
        }
    }
    return null;
}


// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 
