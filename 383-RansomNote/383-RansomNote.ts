// Last updated: 10/7/2025, 11:42:47 PM
function canConstruct(ransomNote: string, magazine: string): boolean {
    let ranArr = ransomNote.split("")
    let magArr = magazine.split("")
    for(let i =0; i< ranArr.length; i++){
        let ind = magArr.indexOf(ranArr[i]) 
        if(ind != -1){
            magArr[ind] = ""
        }else{
            return false
        }
    }
    return true
};