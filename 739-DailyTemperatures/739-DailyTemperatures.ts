// Last updated: 8/5/2025, 11:19:11 PM
function dailyTemperatures(temperatures: number[]): number[] {
    let answer = new Array(temperatures.length).fill(0);
    let stack = []; // stack of indices

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
}
