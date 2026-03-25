//* https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1
class Solution {

    segregate0and1(arr) {

        let j=0
  let n = arr.length
for(let i = 0 ; i<n; i++){
    if(arr[i]==0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] =temp
        j++
    }
 }
 return arr
        
    }
}


