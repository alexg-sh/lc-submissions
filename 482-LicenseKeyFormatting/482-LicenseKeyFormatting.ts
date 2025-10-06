// Last updated: 10/6/2025, 9:21:41 PM
function licenseKeyFormatting(s: string, k: number): string {
    s = s.toUpperCase();
    const temp: string[] = s.split("-");
    const sAll: string = temp.join("");

    let res: string = "";

    const leftOver: number = sAll.length % k;
    for (let i = sAll.length; i > leftOver; i -= k) {
        res = "-" + sAll.substring(i - k, i) + res;
    }

    if (leftOver === 0 && sAll.length !== 0) res = res.substring(1);
    else res = sAll.substring(0, leftOver) + res;

    return res;
};