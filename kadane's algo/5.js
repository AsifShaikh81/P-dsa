
//*1749. Maximum Absolute Sum of Any Subarray
// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let n =  nums.length 
    let currMax = 0
    let maxSum = 0
    // max subarray sum (kadane's)
    for(let i = 0; i<n ; i++){
       currMax= Math.max(nums[i],currMax+nums[i])
        maxSum =  Math.max(maxSum,currMax)
    //    console.log('currmax',currMax)
    
    }


        // Min subarray sum (Kadane's)
    let minSum = 0, currMin = 0;
    for(let i = 0; i < n; i++){
        currMin = Math.min(nums[i], currMin + nums[i]);
        minSum = Math.min(minSum, currMin);
        // console.log('currmin',currMin)
    }
 return Math.max(maxSum, Math.abs(minSum))

    

    
    


};