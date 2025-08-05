// Last updated: 8/5/2025, 11:19:06 PM
function makeFancyString(s: string): string {
    if (s.length < 3)
    return s;

    let result = s[0];
    let prev = s[0];
    let flag = false;

    for (let i = 1; i <s.length; i++) {
        const c = s[i];
        if (c !== prev) {
            result += c;
            prev = c;
            flag = false;
        } else if (!flag) {
            result += c;
            flag = true;
        }
    }
    return result;
};