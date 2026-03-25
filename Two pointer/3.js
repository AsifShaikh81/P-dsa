//*80. Remove Duplicates from Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
  let x = 0 
  let n = arr.length
  for(let i=0; i<n; i++){
    // k<2 first two element will be skipped
    if(x<2 || arr[i] > arr[x-2] ){
        arr[x] = arr[i]
        x++
    }
  }  
  return x
};