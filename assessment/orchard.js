///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = .89;
const galaPrice = .64;
const pinkPrice = .55;



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// here I wanted to make an array that had the days of the week in it.
const dayOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

/* 
    here I wanted to make the length of all the arries in one variable to make add more security for the loop.
I could of just used one of the orchards array length for this because they all have 7 values in them but were's the fun in that. 
*/
let totalOrchardsArces = ((fujiAcres.length % dayOfWeek.length) + (galaAcres.length % dayOfWeek.length) + (pinkAcres.length % dayOfWeek.length)) + dayOfWeek.length


console.log(`============`);

/* 
    here's the loop itself, in the terminal it should show ~~~
    ===================
    Monday: 8
    Tuesday: 10
    Wednesday: 11
    Thursday: 7
    Friday: 9
    Saturday: 9
    Sunday: 9
    ----------------
    Total Arces at the end of week: 63

*/



const endOfWeekTotal = []


for (let i = 0; i < totalOrchardsArces; i++) {
    let totalAcres = fujiAcres[i] + galaAcres[i] + pinkAcres[i];
    endOfWeekTotal.push(totalAcres)
    console.log(`${dayOfWeek[i]}: ${totalAcres}`);
}

let endOfWeekArceTotal = endOfWeekTotal[0] + endOfWeekTotal[1] + endOfWeekTotal[2] + endOfWeekTotal[3] + endOfWeekTotal[4] + endOfWeekTotal[5] + endOfWeekTotal[6]

console.log(`----------`)
console.log(`Total Arces at the end of week: ${endOfWeekArceTotal}`)
console.log(`============`);




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

const WeekArceAverageTotal = []


for(let i = 0; i < totalOrchardsArces; i++ ) {
    let totalAcres = fujiAcres[i] + galaAcres[i] + pinkAcres[i];
    var averageDailyAcres = totalAcres / 3
    WeekArceAverageTotal.push(averageDailyAcres)
    console.log(`${dayOfWeek[i]}: ${averageDailyAcres}`)
}

let WeekAverageTotal = (WeekArceAverageTotal[0] + WeekArceAverageTotal[1] + WeekArceAverageTotal[2] + WeekArceAverageTotal[3] + WeekArceAverageTotal[4] + WeekArceAverageTotal[5] + WeekArceAverageTotal[6]) / 3

console.log(`----------`)
console.log(`Total Average arces at the end of week: ${WeekAverageTotal}`)
console.log(`============`);



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0) {
    
        acresLeft =- averageDailyAcres
        days++
        console.log(`day:${days} - ${acresLeft} left`)
    
}





// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// let fujiTons =
// let galaTons =
// let pinkTons =






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
