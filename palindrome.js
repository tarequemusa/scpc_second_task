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

