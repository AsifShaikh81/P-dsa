
// https://leetcode.com/problems/fruit-into-baskets/submissions/1965761356/
//* 904.Fruit Into Baskets
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(arr) {
    let left = 0
    let map = new Map()
    let n = arr.length
    let maxLen = 0
    for(let right = 0; right<n; right++ ){
        // add in map
        // if arr[right] present inc count by 1 or init by 1
        if(map.has(arr[right])){
            let rightCount = map.get(arr[right]) // get the count of element 
            map.set(arr[right], rightCount+1) // inc count
        }else{
            map.set(arr[right],1) // init by 1 
        }
        

        while(map.size>2){
            let leftCount = map.get(arr[left])
                if(leftCount ===1){
                    map.delete(arr[left])
                }else {
                    map.set(arr[left], leftCount -1)
                }
            left++

        }
     let windowSize = right - left +1
     maxLen = Math.max(maxLen,windowSize)
    }
    return maxLen
};