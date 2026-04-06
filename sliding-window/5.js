// https://leetcode.com/problems/longest-repeating-character-replacement/
//* 424. Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map()
    let low = 0 
    let maxFreq = 0 // to track maximum freq
    let maxLen = 0

    for(let high =0 ; high<s.length ; high++){
        // add current element to map
        let count = map.get(s[high]) || 0 // get count of s[high], if s[high] there in map it will return its value or take count = 0 
        map.set(s[high],count + 1) // if s[high] present in map inc its count by 1 or set it 1
     
     let winSize = high - low + 1 // get the curr size of window
     maxFreq = Math.max(maxFreq , map.get(s[high])) // store the max freq
      

     while(winSize - maxFreq > k){
        map.set(s[low], map.get(s[low]) -1 )
        low ++
        winSize = high - low +1 // update winSize
     }

    // get the maxlength of substring
    maxLen = Math.max(maxLen,winSize)         
}
return maxLen

};