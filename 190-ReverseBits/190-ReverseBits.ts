// Last updated: 8/5/2025, 11:19:19 PM
function reverseBits(n: number): number {
    const binaryStr = n.toString(2).padStart(32, '0');
    const reversedBinary = binaryStr.split('').reverse().join('');
    return parseInt(reversedBinary, 2);
};

