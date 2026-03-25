//*https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1



// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {

    countTriplets(arr, n, sum) {
        // code here
        arr.sort((a,b)=>a-b)
        let count = 0 // if triplet found, inc count by 1
        for(let i=0 ; i<arr.length-2; i++){
            let left = i+1
            let right = arr.length-1
            
        while(left<right){
            // ans = sum 
            let ans = arr[i]+arr[left]+arr[right]
            
            if(ans>=sum){
                right--
            }else {
             // if ans < sum ,This means all elements between left and right are valid.
              count+= right-left
              left++
              
            }
        }
        }
         return count // it contains the count of number of triplets found
    }
   
}