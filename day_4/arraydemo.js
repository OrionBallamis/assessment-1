const backpack = [];

backpack.push(`jacket`, `waterbottle`,`snack`,`sunglasses`);

let jacket = backpack.splice(0,1);

let inventory = backpack.slice();

let fannypack = backpack.splice(0,2);

console.log(fannypack);

backpack.unshift(`stick`, `rock`);

console.log(`backpack`);

let inhand = '';

for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
    if (backpack[i] === 'sunglasses') {
        inhand = backpack.splice(i,1);
    }
}

//console.log(inhand);
//console.log(backpack);

inhand = fannypack.pop();
console.log(inhand);

let arr = [123, 234, 1234, 2345, 12345]

for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr = arr.splice(i,1)
        i++
    }
}

let guessMe = 54;

while (guessMe < 100) {
    console.log()

}