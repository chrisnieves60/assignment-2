const object1 = {
    a: 'something',
    b: 55,
    c: true
  };
  
function grabKeys(object1){
  for (const key in object1) { //for every key in object1 
      console.log(key); //display key 
  }
}


console.log (grabKeys(object1)); 