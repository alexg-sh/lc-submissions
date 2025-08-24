// Last updated: 8/24/2025, 8:46:07 PM
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map(); // Create an empty map to store grouped anagrams

    for (let i = 0; i < strs.length; i++) {     // Loop through each word in the input list
        let sortedStr = strs[i].split('').sort().join(''); // Sort the letters of the current word
        if (!map.has(sortedStr)) {        // If this sorted combination hasn't been seen before
            map.set(sortedStr, [strs[i]]); // Create a new group (array) with this word as the first entry
        } else {
            map.get(sortedStr).push(strs[i]); // If group exists, add this word to that group
        }
    }

    // At the end, map.values() will be groups of anagrams as arrays
    return Array.from(map.values());

};