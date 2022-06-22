function sumMix(arr) {
    //to do
    // convert the strings in the array to numbers
    //sum the array

    let sum=0;
    let numOnlyArr= arr.map((item)=>{return parseInt(item)});
    //sum=numOnlyArr.map((item)=>{return sum+=numOnlyArr[i];})

    for(let i=0;i<numOnlyArr.length;i++) {
        //sum=sum+sumNumOnlyArr[i];
        sum+=numOnlyArr[i];
 }
 return sum;
}
  module.exports = sumMix

  console.log(sumMix([1,3,5,"10","1"]));

