//https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1
// Max Sum Subarray of size K
// 
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        // code here
        // cal 1st two num and stroring in sum
            let sum =0
       for(let i = 0 ; i<k ; i++){
           sum = sum + arr[i]
           
       }
       let low = 0
       let high =k-1
       let n = arr.length
       let res =sum
      //loop runs till high is less than n 
       while(high<n){
           // for storing max sum
        res = Math.max(res, sum)
        // this mean if "high" pointer exist array, break
        if(high==n) break
        low++
        high++
        
        // this the main logic
        //300 = 300 - 100 -> 200
        sum = sum - arr[low-1]
        //200 = 200 + 300 - > 500
        sum = sum + arr[high]
       }
       return res
    }
}
