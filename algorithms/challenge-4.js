
//author: Courage
function sumTwoSmallestNums(arr) {
    //sorted the array in ascending order
            //n elem
    // filter negative numbers from the sorted array
    // loop twice to get get the first two elements
    let sum=0;
    let newFilteredArr=arr.filter(function(elem) { return elem>0; });
    newFilteredArr.sort(function(a,b) { return a-b; });
    sum=newFilteredArr[0]+newFilteredArr[1];
    return sum;
 }
  module.exports =sumTwoSmallestNums
