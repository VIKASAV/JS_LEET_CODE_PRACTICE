function expect(val) {
    return {
      toBe: function (otherVal) {
        if (val !== otherVal) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function (otherVal) {
        if (val === otherVal) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  }
  
  // Usage example:
  const result = expect(5);
  console.log(result.toBe(5))
  console.log(result.notToBe(10))
//   result.toBe(null);

  try {
    result.toBe(5); // No error because 5 === 5
    result.notToBe(10); // No error because 5 !== 10
    result.toBe(3); // Throws an error: "Not Equal"
    result.notToBe(5); // Throws an error: "Equal"
  } catch (error) {
    console.error(error.message);
  }
  