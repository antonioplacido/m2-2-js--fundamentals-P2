// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

function calculateAverage(grades) {
  let gradesum = 0;

  //*this part i could never get  *//
  grades.forEach(function (grade) {
    gradesum += grade;
  });

  let avgGrade = Math.trunc(gradesum / grades.length);
  switch (true) {
    case avgGrade < 60:
      return `F`;
      break;
    case avgGrade < 70:
      return `D`;
      break;
    case avgGrade < 80:
      return `C`;
      break;
    case avgGrade < 90:
      return `B`;
      break;
    case avgGrade <= 100:
      return `A`;
      break;
  }
}

console.log(calculateAverage([76, 60, 83, 100, 78]));

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

/////***Need to do this workshop question */
