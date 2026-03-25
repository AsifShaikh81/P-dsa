//*Squares of a Sorted Array
//approach - 1
// tc - o(n log n) -> bcz using sort() function 
// sp - o(1) -> no extra space
var sortedSquares = function(arr) {
    let n = arr.length
    let j = 0 
    for(let i = 0; i<n; i++){
    let sq = arr[j]*arr[j]
    let temp = sq
    arr[j] = temp
    j++

    }
    return arr.sort((a, b) => a - b)

    
};


// approach 2 - takes extra space 
// tc - o(n) ,sc - o(n)
var sortedSquares = function(arr) {
    let n = arr.length
    let result = new Array(n)
    let left  = 0 
    let right = n-1
    pos = n-1
    while(left<=right){
      let leftsq = arr[left]* arr[left] 
      let rightsq = arr[right]*arr[right]    

      if(leftsq > rightsq){
         result[pos] = leftsq
         left++
      }else {
        result[pos] = rightsq
        right--
      }
      pos--
}

return result

    
};

