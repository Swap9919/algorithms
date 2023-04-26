function linearsearch (arr, target){
      for( let i in arr){
            if(arr[i] === target) return i
      }
      return -1
}
console.log(linearsearch([1,4,6,3,7,9,],7));
console.log(linearsearch([1,4,6,3,7,9,],6));
console.log(linearsearch([1,4,6,3,7,9,],16));