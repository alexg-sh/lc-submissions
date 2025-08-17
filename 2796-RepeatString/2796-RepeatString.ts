// Last updated: 8/17/2025, 10:19:24 PM
interface String {
    replicate(times: number): string;
}

String.prototype.replicate = function (times) {
  let repl = '';
  for (let i = 0; i < times; i++) repl += this;
  return repl;
}