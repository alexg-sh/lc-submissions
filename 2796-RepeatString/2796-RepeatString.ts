// Last updated: 8/17/2025, 10:19:38 PM
interface String {
    replicate(times: number): string;
}

String.prototype.replicate = function (times) {
    return this.repeat(times)
}