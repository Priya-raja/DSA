/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ""; // Initialize as string, not array
    let i = 0;
    
    // Merge characters alternately while both strings have characters
    while (i < word1.length && i < word2.length) {
        res += word1[i];
        res += word2[i];
        i++;
    }
    
    // Add remaining characters from the longer string
    if (i < word1.length) {
        res += word1.slice(i);
    } else if (i < word2.length) {
        res += word2.slice(i);
    }
    
    return res;
};

// Alternative cleaner approach using array join
var mergeAlternatelyV2 = function(word1, word2) {
    const result = [];
    const maxLength = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) result.push(word1[i]);
        if (i < word2.length) result.push(word2[i]);
    }
    
    return result.join('');
};

// TIME COMPLEXITY ANALYSIS:

// Version 1 (String concatenation): O(n²)
// - Each `res += char` creates a new string in JavaScript
// - String concatenation copies all existing characters
// - For n characters: 1 + 2 + 3 + ... + n = O(n²)

// Version 2 (Array + join): O(n) 
// - Array.push() is O(1) amortized
// - Array.join() is O(n) - single pass through array
// - Total: O(n) + O(n) = O(n)

// WINNER: Version 2 is significantly better for large inputs!

// Performance demonstration with larger strings
function performanceTest() {
    const word1 = "a".repeat(10000);
    const word2 = "b".repeat(10000);
    
    console.time("String concatenation (V1)");
    mergeAlternately(word1, word2);
    console.timeEnd("String concatenation (V1)");
    
    console.time("Array + join (V2)");
    mergeAlternatelyV2(word1, word2);
    console.timeEnd("Array + join (V2)");
}

// Test cases
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"

console.log(mergeAlternatelyV2("abc", "pqr")); // "apbqcr"
console.log(mergeAlternatelyV2("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternatelyV2("abcd", "pq")); // "apbqcd"

// Uncomment to run performance test:
performanceTest();