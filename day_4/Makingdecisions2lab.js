// For problems 1-2 use the following lines of code:
var arr = [10,20,30,40,50,60]

////////// PROBLEM 1 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
*/

//Code Here
let firstitem = arr[0];

////////// PROBLEM 2 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/

//Code Here
let lastItemRemoved = arr.pop();
console.log(`${lastItemRemoved}`);
console.log(`==================================`)
////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/

//Code Here

for(let i = 0; i < family.length; i++) {
        console.log(family[i]);
}
console.log(`==================================`)

////////// PROBLEM 4 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
let evensArr = []
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
*/

//Code Here
for(let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(`${nums[i]}`)
    }
}
console.log(`==================================`)

////////// PROBLEM 5 //////////

// Do not edit the code below.
var score = 75
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console log an 'A', between 80 and 89, console log a 'B', between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console log an 'F'.
*/

//Code Here

if (score > 100) {
    console.log(`Grade: A+`)
} else if (score >= 90 && score < 100) {
    console.log(`Grade: A`);
} else if (score >= 80 && score < 90) {
    console.log(`Grade: B`);
} else if (score >= 70 && score < 80) {
    console.log(`Grade: C`);
} else if (score >= 60 && score < 70) {
    console.log(`Grade: D`);
} else if (score >= 0 && score < 60) {
    console.log(`Grade: F`);
} else {
    console.log(`Grade: N/A`);
}
console.log(`==================================`)

////////// Intermediate Problems //////////

////////// PROBLEM 6 //////////

// Do not edit the code below.
var myFavoriteNumbers = [4,8,12,16,20,24,28];
// Do not edit the code above.

/*
  Create a variable named 'someNum' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
*/

//Code Here
let someNum = myFavoriteNumbers[4]
console.log(`Some number: ${someNum}`)
console.log(`==================================`)
////////// PROBLEM 7 //////////

// Subscripting (accessing values using their index) an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Let's write some code to check for that. 
// Use an if statement to check the length of the 'myFavoriteNumbers' array. If it's less than 7, log 'There are not enough elements in this array' to the console. If the length is more than 7, reassign the value of 'someNum' to the value of the 7th element in the array. (Hint: how can you make sure that your code works for exactly 7 elements? What index do you use to get the 7th element?)

//Code Here

if (myFavoriteNumbers.length >= 7) {
    someNum = myFavoriteNumbers[6]
} else {
    console.log(`Error: There are not enough elements in this array`)
}

console.log(`==================================`)

////////// PROBLEM 8 //////////

// Do not edit the code below.
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is divisible by 3. If it is, console.log '{number} is divisible by 3.'

//Code Here
for(let i = 0; i < listOfNumbers.length; i++) {
    if (i % 3 === 0) {
        var answer = i / 3 + 1
    }
    if (listOfNumbers[i] % 3 === 0) {
    
        console.log(`${listOfNumbers[i]} is divisible by 3 - ${answer} time(s)`);
    }

}
console.log(`==================================`)

////////// PROBLEM 9 //////////
// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console log every item in the array.
*/

//Code Here
for(let i = letters.length - 1; i >= 0; i-- ) {
    console.log(letters[i])
}
console.log(`==================================`)
////////// Advanced Problems //////////

////////// PROBLEM 10 //////////
// Switch statements can be excellent alternatives to if blocks. Look up switch statements (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.
let letterGrade = 'A'
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/

//Code Here

/*if (letterGrade === 'A') {
    console.log(`the student is doing exellently.`);
} else if (letterGrade === `B`) {
    console.log(`the student is doing well.`);
} else if (letterGrade === 'C') {
    console.log(`the student is doing alright.`);
} else if (letterGrade === `D`) {
    console.log(`the student is not doing well.`);
} else if (letterGrade === `F`) {
    console.log(`the student is failing`);
} else {
    console.log(`not an eligible grade.`)
}
*/ 



switch(letterGrade) {
    case 'A': 
        console.log (`the student is doing exellently.`);
        break;
    case 'B': 
        console.log (`the student is doing well.`);
        break;
    case 'C': 
        console.log(`the student is doing alright.`);
        break;
    case 'D': 
        console.log(`the student is not doing well.`);
        break;
    case 'F': 
        console.log(`the student is failing`);
        break;
    default: 
        console.log(`not an eligible grade.`);
}
console.log(`==================================`)

////////// PROBLEM 11 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/

//Code Here
console.log(`DEVMOUNTAIN!!!!!`)
console.log(`count to 100`)
console.log(`-------------------------`)
for(let i = 1; i < 100; i++) {
    if (i % 15 === 0 ) { 
        console.log(`devmountain`);
    } else if (i % 5 === 0) {
        console.log(`mountain`);
    } else if (i % 3 === 0) {
        console.log(`dev`);
    } else {
        console.log(`${i}`)
    }
}
console.log(`-------------------------`)
console.log(`All done`)
console.log(`==================================`)
