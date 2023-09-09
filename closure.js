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