const array = [5, 10, 15, 20, 25]; //=10

function reduce(callback,array){
    let actualLength = array.length
    
    for (let i=0; i<actualLength-1; i++)
    {
        array[0]=callback(array[0], array[1]); 
        array[1]=array[0]; 
        array.shift(); 
    }
    return array; 
}
function timesItself(cur, next){
    let num = cur + next; 
    return num; 
}

console.log(reduce(timesItself, array))