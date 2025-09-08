// Last updated: 9/8/2025, 7:05:19 PM
function construct2DArray(original: number[], m: number, n: number): number[][] {
    const res: number[][] = [];
    if (m * n !== original.length) {
        return []
    }

    for (let i = 0; i < original.length; i++) {
        if (i % n === 0) {
            res.push([])
        }
        res[res.length - 1].push(original[i]);
    }
    return res
};