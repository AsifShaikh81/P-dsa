
// https://leetcode.com/problems/maximum-subarray/?utm_source=chatgpt.com
//*53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0]
    let currSum  = 0
    
    for(let i =0;i<nums.length;i++){
        
        currSum = Math.max(nums[i],currSum + nums[i])
        ans = Math.max(ans, currSum)

    }
    console.log("ans",ans)
    console.log("currSum",currSum)
    
    return ans
    
};