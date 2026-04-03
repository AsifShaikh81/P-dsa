//https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //map.get(key)-> returns value of the key (undefined if not present)
   //map.set(key, value)-> adds new key:value OR updates existing key
  //map.has(key)-> returns true/false (key exists or not)
 //map.delete(key) > removes that key:value pair (returns true if deleted)
    let map = new Map()
    let low = 0
    let high;
    let maxLen = 0
    for(high=0; high<s.length;high++){
        let count = map.get(s[high])
        if(map.has(s[high])){
            map.set(s[high], count+1)
        }else{
            map.set(s[high],1)
        }

       while(map.get(s[high])>1){
        let leftCharCount = map.get(s[low])
        map.set(s[low], leftCharCount - 1)
        if(leftCharCount ===0 ){
            map.delete(s[low])
        }
        low++
       }

        let winSize = high - low +1
        maxLen = Math.max(winSize,maxLen)
    }
    return maxLen
};