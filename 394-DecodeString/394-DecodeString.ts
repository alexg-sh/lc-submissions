// Last updated: 10/31/2025, 8:00:20 PM
function decodeString(s: string): string {
    const stack: [string, number][] = [];
    let currentString = "";
    let currentNum = 0;

    for (let char of s) {
        if (!isNaN(Number(char))) {
            // If the character is a digit, build the current number
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push the current string and number onto the stack
            stack.push([currentString, currentNum]);
            currentString = "";
            currentNum = 0;
        } else if (char === ']') {
            // Pop from the stack and repeat the string
            const [prevString, repeatNum] = stack.pop()!;
            currentString = prevString + currentString.repeat(repeatNum);
        } else {
            // Build the current string with letters
            currentString += char;
        }
    }

    return currentString;
}