    /**
    * @param {number[]} nums
    * @return {number[][]}
    */
    var threeSum = function(nums) {
        nums.sort((a,b)=>a-b)
        let n = nums.length
        let result = []

    for(let i = 0 ; i<n-2 ; i++){
        let left = i+1
        let right = nums.length -1
        // skipping duplicate for ith value 
        if(i>0 &&nums[i]===nums[i-1]) continue 
         
        while(left < right){
            let sum = nums[i]+nums[left]+nums[right] // to store sum of triplet
            
            if(sum ===0){
                result.push([nums[i], nums[left], nums[right]])
                // skipping duplicat for left
               while(left < right &&nums[left]===nums[left+1]) left++ 
               // skipping duplicat for right
               while(left < right && nums[right]===nums[right-1]) right--
                left++
                right--
            }
            else if(sum < 0){
                left++
            }else {
                right--
            }
        }
        
    }
    return result

    };

/*
Sort array
Fix one element (i)
Two pointer search (left, right)
Skip duplicates
*/

//TC - O(n^2), SC - O(1)