/*383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true. */
 
let ransomNote = (note, magazine)=>{

  let noteArr = note
 let magazineArr = magazine
  console.log(magazineArr, noteArr)

  let newTable = {}
  if(magazine.length < note.length) return false

  for (let i = 0; i< magazineArr.length; i++){
    
    newTable[magazineArr[i]]= (newTable[magazineArr[i]] || 0 ) + 1
  }
console.log(newTable)

 for (let i = 0; i< noteArr.length; i++){
    if(!newTable[noteArr[i]] || newTable[noteArr[i]] <= 0)
    { return false}
     newTable[noteArr[i]]--
}
return true

}

console.log(ransomNote('llo','hello'))

