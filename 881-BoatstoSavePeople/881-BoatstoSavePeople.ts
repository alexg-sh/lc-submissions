// Last updated: 8/31/2025, 10:00:53 PM
function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let boatCounter = 0;
    
    while (left <= right) {
        // If the lightest and heaviest can share a boat
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            // Otherwise, the heaviest person goes alone
            right--;
        }
        boatCounter++;
    }
    return boatCounter;
}
