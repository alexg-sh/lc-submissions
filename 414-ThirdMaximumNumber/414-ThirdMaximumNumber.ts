// Last updated: 10/10/2025, 10:09:12 PM
function thirdMax(nums: number[]): number {
    let memSet = [...new Set(nums)];

    const sort = memSet = memSet.sort((a,b) => b-a)

    return sort.length >= 3 ? sort[2] : sort[0]
};