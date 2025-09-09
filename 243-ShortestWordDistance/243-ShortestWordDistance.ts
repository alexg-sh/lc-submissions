// Last updated: 9/9/2025, 11:27:37 PM
function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    // Initialize the index of last seen word1 to -1 (not found yet)
    let index1 = -1;
    // Initialize the index of last seen word2 to -1 (not found yet)
    let index2 = -1;
    // Set minDist to the maximum possible value, which is the array length
    let minDist = wordsDict.length;

    // Loop through the array of words
    for (let i = 0; i < wordsDict.length; i++) {
        // If the current word is word1, update index1 to current position
        if (wordsDict[i] === word1) {
            index1 = i;
        }
        // If the current word is word2, update index2 to current position
        if (wordsDict[i] === word2) {
            index2 = i;
        }
        // If both word1 and word2 have been seen at least once
        if (index1 !== -1 && index2 !== -1) {
            // Update minDist with the smaller value between current minDist and the distance between index1 and index2
            minDist = Math.min(minDist, Math.abs(index1 - index2));
        }
    }
    // Return the minimum distance found
    return minDist;
}
