const object1 = {
    a: 'something',
    b: 55,
    c: true
  };
  
function grabValues(object1){
  for (const value in object1) { //for every key in object1 
      console.log(object1[value]); //display key 
  }
}

grabValues(object1); 