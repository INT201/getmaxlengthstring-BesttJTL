const { template } = require('@babel/core')

getMaxLengthString(['h', 'hi', 'hey','dsadasdsqdsa'])
getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])
getMaxLengthString(['hi'])
getMaxLengthString(null)
getMaxLengthString(undefined)
function getMaxLengthString(arrayOfString) {
  let ans = []
  //console.log(arrayOfString)
  // standard error
  if(arrayOfString === null || arrayOfString === undefined){
    //console.log(undefined)
    return undefined
  }
  // clear 1 array
  if(arrayOfString.length == 1){
    //console.log(arrayOfString)
    return arrayOfString
  }
  // 2
  else{
    arrayOfString.sort(function (a,b){
      return b.length-a.length
    }) // 1 //เหลี่ยม
    // if(arrayOfString[0].length == arrayOfString[1].length){
    //   //console.log([arrayOfString[0],arrayOfString[1]])
    //   return [arrayOfString[0],arrayOfString[1]]
    // }
    // else{
    //   //console.log ([arrayOfString[0]])
    //   return [arrayOfString[0]]
    // }
      ans.push(arrayOfString[0])
    for(let loopans of arrayOfString){
      // console.log(arrayOfString[0].length)
      // console.log(loopans.length)
      if(arrayOfString[0].length == loopans.length && arrayOfString[0] !== loopans){
        ans.push(loopans)
      }
      } // loop
      //console.log(ans)
      return ans
  }
}
module.exports = getMaxLengthString
