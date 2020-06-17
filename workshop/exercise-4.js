// Q4
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {}

// make certain to console the returned value
console.log(calculateAverage(76, 60, 83, 100, 78));


/* gonna use length of array to be the divider, then use the sum length.array times to get answer */



let grades = [76, 60, 83, 100, 78];

let total = 0;
for(let i=0;i< grades.length; i++ )
        {total += grades[i];}

const avg = Math.trunc(total / grades.length);
console.log(avg);