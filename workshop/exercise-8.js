// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q8
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

const msg = "Hello";
function greet(lst) {
  // in this case function input variable is an array, so its 1st = []
  const welcome = lst.map((laPersonne) => {
    return msg + " " + laPersonne;
  });
  return welcome;
}
// -------------------------------------------------------------------------
console.log("Q6 greet()", greet(["David", "Billy", "Lisa", "Jennifer"]));
