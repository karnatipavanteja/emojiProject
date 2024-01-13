function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    const originalNum = x;
    let reversedNum = 0;

    while (x > 0) {
        const digit = x % 10;
        reversedNum = reversedNum * 10 + digit;
        x = Math.floor(x / 10);
    }

    return originalNum === reversedNum;
}

// Example usage:
const num1 = 121;
console.log(`Input: ${num1}, Output: ${isPalindrome(num1)}`); // true

const num2 = -121;
console.log(`Input: ${num2}, Output: ${isPalindrome(num2)}`); // false

const num3 = 10;
console.log(`Input: ${num3}, Output: ${isPalindrome(num3)}`); // false