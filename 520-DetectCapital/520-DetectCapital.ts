// Last updated: 9/23/2025, 9:07:21 PM
function detectCapitalUse(word: string): boolean {
    let uppercase = word.toUpperCase();
    if (uppercase === word) return true

    let lowercase = word.toLowerCase()
    if (lowercase === word) return true

    let titleCaseStr = toTitleCase(word)
    if (titleCaseStr === word) return true

    return false
}
const toTitleCase = (word: string) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}