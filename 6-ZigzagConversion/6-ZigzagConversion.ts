// Last updated: 1/1/2026, 11:53:22 PM
1function convert(s: string, numRows: number): string {
2    if (numRows === 1 || numRows >= s.length) return s;
3
4    const rows: string[] = new Array(Math.min(numRows, s.length)).fill("");
5    let currRow = 0;
6    let goingDown = false;
7
8    for (const c of s) {
9        rows[currRow] += c;
10        if (currRow === 0 || currRow === numRows - 1) {
11            goingDown = !goingDown;
12        }
13        currRow += goingDown ? 1 : -1;
14    }
15
16    return rows.join("");
17}
18