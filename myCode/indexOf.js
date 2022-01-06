const array = [44, 55, 23, 45, 53, 34, 44]; 


function myIndexOf(array, target){
    let result = false;
    let index = 0; 
    for (i=0; i<array.length; i++){
        if (array[i]==target)
        {
        result=true;
        index = i;  
        }
    }
    if (result == true){
        return index; 
    }
    else 
    return -1; 

}

console.log(myIndexOf(array, 45)); 
