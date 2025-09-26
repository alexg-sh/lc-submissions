// Last updated: 9/26/2025, 10:24:02 PM
function checkIfExist(arr: number[]) {
    const set = new Set<number>();
    return arr.some((v) => {
        if (set.has(v / 2) || set.has(v * 2)) {
            return true;
        }
        return set.add(v), false;
    });
}