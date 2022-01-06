let array = [8, 9, 7, 5, 4]; 

function myPush(array, elementToAdd){
    array.length++; 
    array[array.length-1] = elementToAdd; 
    
}

myPush(array, 69)
console.log(array)