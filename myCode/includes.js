const array = [44, 55, 23, 45, 53, 34, 44]; 


function myIncludes(array, target){
    let result = false;
    for (i=0; i<array.length; i++){
        if (array[i]==target)
        result=true; 
        
    }
    return result; 

}


console.log(includes(array, 69))