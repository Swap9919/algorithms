function linearsearch (arr, target){
      for( let i in arr){
            if(arr[i] === target) return i
      }
      return -1
}
console.log(linearsearch([1,4,6,3,7,9,],7));
console.log(linearsearch([1,4,6,3,7,9,],6));
console.log(linearsearch([1,4,6,3,7,9,],16));

// loop over each element in the array, and check to see if the current element is equal to the target, time complexity is Best O(1), average O(n/2), worst O(n).