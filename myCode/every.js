const array = [44, 55, 23, 45, 53, 34, 44]; 
result = false; 

function every(callback, array){

    for (let i=0; i<array.length; i++)
    {
        if(callback(array[i]))
        result = true; 
        else 
        result = false; 
    }
    return result; 
}
function isMoreThanNine(num){
    return num>9; 
}

console.log(every(isMoreThanNine, array))