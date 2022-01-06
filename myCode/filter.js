
arr1 = [3, 44, 55, 90, 45, 6, 9, 5, 30]

function myFilter(callback, arr1){
    const result = []; 

    for (let i=0; i<arr1.length; i++)
    {
    //result[i] = callback(arr1[i]); 
    
    if(callback(arr1[i])==1)
    {
      result.push(arr1[i])
    } 
  }
    return result; 
}

function moreThanTen(num){
    return num>10; 
}

console.log(myFilter(moreThanTen, arr1)); 