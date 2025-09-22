// Last updated: 9/22/2025, 11:04:09 PM
function isStrobogrammatic(num: string): boolean {
  const mapping = {
    '0': '0',
    '1': '1',
    '6': '9',
    '9': '6',
    '8': '8',
  }

  for (let i = 0; i < num.length/2; i++) {
    if (mapping[num[i]] !== num[num.length-i-1]) return false;
  }
  return true
};