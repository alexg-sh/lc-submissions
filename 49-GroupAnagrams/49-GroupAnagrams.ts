// Last updated: 8/5/2025, 11:19:25 PM
function groupAnagrams(strs: string[]): string[][] {
    const lookup: { [key: string]: string[] } = {};

    for(let i = 0; i < strs.length; i++) {
        const freq: number[] = new Array(26).fill(0);
        for(let j = 0; j < strs[i].length; j++) {
            freq[strs[i][j].charCodeAt(0) - 97] += 1;
        }
        lookup[freq.toString()] = (lookup[freq.toString()] ?? []).concat(strs[i]);
    }

    const output:string[][] = []
    for(let key in lookup) {
        output.push(lookup[key]);
    }
    return output;
};