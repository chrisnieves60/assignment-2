

const array = [3, 4, 99, 6, 8, 9, 2, 7]; 
result = false; 

function mySome(callback, array){

    for (let i=0; i<array.length; i++)
    {
        if(callback(array[i]))
        result = true; 
    }
    return result; 
}
function isMoreThanNine(num){
    return num>9; 
}

console.log(mySome(isMoreThanNine, array))