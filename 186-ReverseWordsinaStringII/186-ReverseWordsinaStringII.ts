// Last updated: 8/16/2025, 9:30:54 PM
function reverseWords(s: string[]): void {
    s.reverse();
    let l= 0,r= 0;
    while (l<s.length){
        while (r<s.length && s[r]!=' '){
            r++;
        }
        let t=r-1;
        while(l<t){
            const temp = s[l];
            s[l] = s[t]
            s[t]= temp
            l++, t--;
        }
        r++
        l=r
    }    
};