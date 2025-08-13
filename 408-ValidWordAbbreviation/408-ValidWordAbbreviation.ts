// Last updated: 8/13/2025, 8:24:22 PM
function validWordAbbreviation(word: string, abbr: string): boolean {
    let leftPtr = 0, rightPtr=0;

    while (leftPtr < word.length) {
        if (word[leftPtr] != abbr[rightPtr]) {
        // leading 0, or not an int
            if (abbr[rightPtr] === "0" || !((/[0-9]/g.test(abbr[rightPtr])))) return false;
            // otherwise get number
            let spaces = "";
            while ( /[0-9]/g.test(abbr[rightPtr]) ) {
                spaces += abbr[rightPtr];
                rightPtr++;
            }
            // check if number valid length
            if (leftPtr + parseInt(spaces) - word.length > 0) return false;
            // increment left ptr
            leftPtr += parseInt(spaces);

        } else {
            // move pointers
            leftPtr++;
            rightPtr++;
        }
    }
    
    return leftPtr === word.length && rightPtr === abbr.length;
};