// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

// Q3.3
// Would this work with more integers?


let num1 = 3
let num2 = 8

function max(num1, num)
{if(num1 > num2){return num1} else {return num2}
}

console.log(max(num1,num2));

/*see previous question answer*/

let num3 = 100000000000000000
let num4 = 48415

let result = Math.max(num1,num2,num3,num4);
console.log(result)



/*              Use the Math.max to win???     */