// Last updated: 8/5/2025, 11:19:08 PM
function createCounter(n: number): () => number {
    return function() {
       return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */