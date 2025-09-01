// Last updated: 9/1/2025, 7:57:46 PM
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void { // Define the function that receives an array of characters 's'
    let left = 0;                          // Initialize a pointer 'left' at the start of the array
    let right = s.length - 1;              // Initialize a pointer 'right' at the end of the array
    while (left <= right) {                 // Continue the loop while 'left' is less than 'right'
        [s[left], s[right]] = [s[right], s[left]]; // Swap the characters at positions 'left' and 'right'
        left++;                            // Move 'left' pointer one step to the right
        right--;                           // Move 'right' pointer one step to the left
    }
}
