//Longest substring without repeating charatcters eg: s= "abcabcbb" output=3
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let l = 0
    let maxLength = 0

    for(let r = 0; r < s.length; r++){
        if(map.has(s[r])){
            l = Math.max(map.get(s[r]) + 1, l)
        }
        map.set(s[r], r)
        maxLength = Math.max(maxLength, r - l + 1)
    }
    return maxLength
}

const ans = lengthOfLongestSubstring("abcdefghia")
console.log(ans)