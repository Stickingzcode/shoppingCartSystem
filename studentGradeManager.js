// 1. Initialize an array of grades
let arrayOfGrades = [85, 92, 78, 88, 90, 67, 95];

// 2. add grade to the end of the array.
arrayOfGrades.push(90);
console.log(arrayOfGrades);

// remove last grade from array
arrayOfGrades.pop(arrayOfGrades.length - 1);
console.log(arrayOfGrades);

// add grade to the beginning of the array
arrayOfGrades.unshift(99);
console.log(arrayOfGrades);

// remove first grade from array
arrayOfGrades.shift(arrayOfGrades[0]);
// or 
arrayOfGrades.shift();
console.log(arrayOfGrades);

// 3. insert and remove elements at specific positions or a number of of elements
let splicedArray = arrayOfGrades.splice(3);
console.log(splicedArray);

// remove 3 elements starting from index 2 and prints out the removed elements 
let splicedGrades = arrayOfGrades.splice(2, 3);
console.log(splicedGrades);

// replace element in a specified index with splice
arrayOfGrades.splice(2, 3, 45, 50, 55);
console.log(arrayOfGrades);

// create a new array from an existing array with slice(inclusive of the first, exclusive of the last)
let newGrades = arrayOfGrades.slice(2, 4);
console.log(newGrades);
let newArray = arrayOfGrades.slice(3);
console.log(newArray);

// 4. concatenate two different array
let concatenatedArray = [45, 50, 55];
console.log(arrayOfGrades.concat(concatenatedArray));

// create a string from the array of grades
let stringedArray = arrayOfGrades.join(",");
console.log(stringedArray);

// 5. reverse the order of the array
let reversedArray = arrayOfGrades.reverse();
console.log(reversedArray);

// sort array in ascending order
let orderedArray = arrayOfGrades.sort();
console.log(orderedArray);

// 6. print each grade in the array
arrayOfGrades.forEach(grade => {
    console.log(grade);
});

// create a new array of grades each increased by 5 points using map
let increasedArray = arrayOfGrades.map(grade => grade + 5);
console.log(increasedArray);

// 7. create array of grades above 70 using filter
let passingGrades = arrayOfGrades.filter(grade => grade >= 70);
console.log(passingGrades);

// calculate total sum of grades using reduce
let gradeSum = arrayOfGrades.reduce((sum, grade) => sum + grade, 0);
console.log(gradeSum);

// find first grade that is 88 using find
let fistNumber = arrayOfGrades.find(grade => grade === 88);
console.log(fistNumber);

// find index of the first grade below 70 using findIndex
let firstGrade = arrayOfGrades.findIndex(grade => grade < 70);
console.log(firstGrade);

// check if any grade is below 60 using some
let lowGrade = arrayOfGrades.some(grade => grade < 60);
console.log(lowGrade);

// check if all grades are above 50 using every
let highGrade = arrayOfGrades.every(grade => grade > 50);
console.log(highGrade);

// check if a particular grade is in an array using include
let specificGrade = arrayOfGrades.includes(grade => grade = 99.5);
console.log(specificGrade);




