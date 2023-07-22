function countVowelsAndConsonants (str) {
    // Convert the input string to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();

    // Define the sets of vowels and consonants
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    // Initialize counters for vowels and consonants
    let vowelCount = 0;
    let consonantCount = 0;

    // Loop through each character in the input string
    for(let char of lowerStr) {
        // Check if the character is a vowel or consonant
        if(vowels.includes(char)) {
            vowelCount++;
        } else if(consonants.includes(char)) {
            consonantCount++;
        }
        // Ignore other characters (e.g., spaces, punctuation, numbers)
    }

    // Return the results as an object
    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// Example usage:
const testString = "Hello, World!";
const result = countVowelsAndConsonants(testString);
console.log(result);
