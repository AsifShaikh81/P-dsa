//*same code like prev no changes 
// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/description/      

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(arr, k) {
    let map = new Map()
    let low =0
    let maxLen = 0
    let maxfreq = 0
    let high
    for(high=0; high<arr.length; high++){
    let count =  map.get(arr[high]) || 0
    map.set(arr[high], count+1)

    //update maxfreq
    maxfreq = Math.max(maxfreq,map.get(arr[high]))
    let winSize = high -low + 1
    while(winSize -maxfreq >k){
    map.set(arr[low], map.get(arr[low])-1)
    low++
    winSize = high - low +1 // update window imp
    }
    maxLen = Math.max(maxLen,winSize)

    }
    return maxLen
};