// Sample marks array for five students
const marks = [85, 92, 78, 95, 89];

// Initialize a variable to store the highest marks and set it to the first student's marks
let highestMarks = marks[0];

// Iterate through the array to find the highest marks using the ternary operator
for (let i = 1; i < marks.length; i++) {
    highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

// Display the highest marks to the teacher
console.log(`The highest marks scored by a student in the class are: ${highestMarks}`);
