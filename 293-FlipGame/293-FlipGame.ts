// Last updated: 8/22/2025, 1:12:38 PM
function generatePossibleNextMoves(currentState: string): string[] {

    let result: string[] = []
    for (let i = 1; i < currentState.length; i += 1) {
        if (currentState[i] === '+' && currentState[i - 1] === '+') {
            let newString = currentState.split('');
            newString[i] = '-'
            newString[i - 1] = '-'
            result.push(newString.join(''))
        }
    }
    return result
};