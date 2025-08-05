// Last updated: 8/5/2025, 11:19:33 PM
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(prefix.length > 0){
            if(strs[i].indexOf(prefix) === 0){
                break;
            }
            prefix = prefix.slice(0, -1);
        }
    }
    
    return prefix;
};