function isPalindrome (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

function getPalindromeLength (str) {
    // Check if the string is a palindrome
    if(isPalindrome(str)) {
        // Calculate the length of the palindrome string
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanedStr.length;
    } else {
        return -1; // Return -1 to indicate that the string is not a palindrome
    }
}

// Example usage:
const testString1 = "A man, a plan, a canal: Panama";
const testString2 = "racecar";
const testString3 = "hello";

const length1 = getPalindromeLength(testString1);
const length2 = getPalindromeLength(testString2);
const length3 = getPalindromeLength(testString3);

if(length1 > 0) {
    console.log(`The string is a palindrome. Palindrome length: ${ length1 }`);
} else {
    console.log("The string is not a palindrome.");
}

if(length2 > 0) {
    console.log(`The string is a palindrome. Palindrome length: ${ length2 }`);
} else {
    console.log("The string is not a palindrome.");
}

if(length3 > 0) {
    console.log(`The string is a palindrome. Palindrome length: ${ length3 }`);
} else {
    console.log("The string is not a palindrome.");
}


// The isPalindrome function:
// This function checks if a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. The function does the following:

// It takes a single parameter str, which is the input string to be checked.
// It removes non-alphanumeric characters from the input string and converts it to lowercase to make the comparison case-insensitive.
// It stores the cleaned string in the variable cleanedStr.
// It creates a reversed version of cleanedStr by splitting the string into an array of characters, reversing the array, and then joining the characters back into a string.
// It compares the original cleaned string cleanedStr with its reverse reversedStr.
// If the two strings are the same, it means the input string is a palindrome, so the function returns true; otherwise, it returns false.
// The getPalindromeLength function:
// This function takes a single parameter str, which is the input string to be checked for palindrome. It does the following:

// It calls the isPalindrome function to check if the input string str is a palindrome.
// If the string is a palindrome (i.e., isPalindrome(str) returns true), it calculates the length of the palindrome string by removing non-alphanumeric characters and converting to lowercase. The length is then stored in the variable cleanedStr.
// It returns the length of the palindrome string as a positive number.
// If the input string is not a palindrome (i.e., isPalindrome(str) returns false), it returns -1 to indicate that the string is not a palindrome.
// Example usage:
// The example usage section demonstrates how to use the getPalindromeLength function with three different test strings (testString1, testString2, and testString3). It calculates the length of the palindrome string (if it is a palindrome) or outputs a message indicating that the string is not a palindrome.

// Here's what the example output would be:

// csharp
// Copy code
// The string is a palindrome. Palindrome length: 21
// The string is a palindrome. Palindrome length: 7
// The string is not a palindrome.
// In this example, testString1 is a palindrome with a length of 21 characters, testString2 is a palindrome with a length of 7 characters, and testString3 is not a palindrome.