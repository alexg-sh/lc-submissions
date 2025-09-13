// Last updated: 9/13/2025, 11:03:49 PM
function reverseOnlyLetters(s: string): string {
    let arr = s.split('');
    let l = 0, r = arr.length-1;

    while ( l < r) {
        if (!/[a-zA-Z]/.test(arr[l])){ 
            l++
        }
        else if (!/[a-zA-Z]/.test(arr[r])){
            r--;
        }else {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
    }
    return arr.join('')
};