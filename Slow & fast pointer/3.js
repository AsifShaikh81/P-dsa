

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(arr) {
  let slow = 0
  let fast = 0 
  while(true){
    slow = arr[slow] // move 1 step
    // move 2 step
    fast = arr[fast]
    fast = arr[fast]
    //at any point sloww == fast then
    if(slow==fast){
        slow = 0 // reset slow
        while(slow!=fast){
            slow = arr[slow] //move 1 step
            fast = arr[fast] // move 1 step
        }
        return slow  // or fast

    }

  }
  return -1  
};