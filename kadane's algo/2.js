

// User function Template for javascript
/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the subarray with the smallest sum.
    smallestSumSubarray(arr, n) {
        let ans = 0 // store the final ans
        let currSum = arr[0] // store the curr sum 
        for(let i=1;i<n;i++){
            currSum = Math.min(arr[i], currSum+arr[i])
            ans = Math.min(ans,currSum)
            //  console.log("ans",ans)
        // console.log("currSum",currSum)
        }
        
        return ans
        
    }
}