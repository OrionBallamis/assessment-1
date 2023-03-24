// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let largest = array[0]
let smallest = array[0]


for(let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        smallest = array[i]

    } else if (largest < array[i]){
        largest = array[i]
    }
}

console.log(smallest, largest)

