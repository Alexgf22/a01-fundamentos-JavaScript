function isPalindrome(text) {
    var processedText = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var reversedText = processedText.split('').reverse().join('');
    
    return processedText === reversedText;
}

var text = prompt("Enter a phrase to see if it is a palindrome");

if (isPalindrome(text)) {
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
}
