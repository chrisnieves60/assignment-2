//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const arr1 = [6, 4, 2, 1, 3]

function myMap(callback, arr1){
  let result = new Array(arr1.length); //create new EMPTY array with length of arr1
for (let i = 0; i < arr1.length; i++){ //for loop until end of array 
  result[i] = callback(arr1[i]); //our new empty array result, will be manipulated 
}                                //using our callback function 

  return result;                 //this function must return result. 
  //console.log(arr1[i])
}


// define cb
function  timesthree(num){
  return num * 3; //the callback function manipulates the array, and returns its
}                 //new value to the function myMap

console.log(myMap(timesthree, arr1)); //we call myMap with our manipulator function, 
                                      //and the array we are manipulating. 









