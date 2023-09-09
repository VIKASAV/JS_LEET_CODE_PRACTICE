function createCounter(n) {
    // Define a variable to store the current value
    let currentValue = n;
  
    // Define the counter function
    function counter() {
      // Increment the current value by 1 and return it
      return currentValue++;
    }
  
    // Return the counter function
    return counter;
  }
  
  // Usage example:
  const myCounter = createCounter(10);
  
  console.log(myCounter()); // Output: 10
  console.log(myCounter()); // Output: 11
  console.log(myCounter()); // Output: 12
  console.log(myCounter())  



  var createCounter1 = function(n) {


    function counter1() {
        
        return n++;

    };

    return counter1();
};

const myCounter1 = createCounter(-2);

  
console.log(myCounter1());
console.log(myCounter1());
console.log(myCounter1());

createCounter2=(n)=>()=>{

  return ++n;
}

const myCounter2 = createCounter(2);
console.log(myCounter2());