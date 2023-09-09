function createHelloWorld() {
    // Define the inner function that always returns "Hello World"
    function helloWorld() {
      return "Hello World";
    }
  
    // Return the helloWorld function
    return helloWorld;
  }
  
  // Usage example:
  const helloFunction = createHelloWorld();
  console.log(helloFunction()); // Output: "Hello World"
  console.log(helloFunction()); // Output: "Hello World"

  // Single answer
  const helloWorld=()=>()=>"HelloWorld";

  const func = helloWorld();

  console.log(func())
  