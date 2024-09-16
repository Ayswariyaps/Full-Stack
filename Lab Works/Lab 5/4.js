function isFirstCharacterUppercase(str) {
    return /^[A-Z]/.test(str);
}

// Example usage:
console.log(isFirstCharacterUppercase('Hello')); // Output: true
console.log(isFirstCharacterUppercase('hello')); // Output: false
