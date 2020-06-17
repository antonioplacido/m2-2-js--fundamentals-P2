// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
let gradesum = 0;    


//*this part i could never get  *//
grades.forEach(function (grade) {
    gradesum += grade;});
/*                                */

return Math.trunc(gradesum / grades.length);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));


//*this part i could never get  *//