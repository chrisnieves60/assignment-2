// implement forEach without using forEach. Use a callback function

// create an array
const arr1 = [1, 2, 3]

function myEach(callback, arr1){
for (let i = 0; i < arr1.length; i++){
  callback(arr1[i], index=i, length=arr1.length)
  
  //console.log(arr1[i])
}
}//OTHER FILE IS FOR USING NATIVE BUILT IN FUNCTION

// define cb
function  printArr(num,index, length ){
  console.log(num, index, length); 
}

//printArr(arr1, count)

myEach(printArr, arr1)
