function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0;
    let count = 0;
    for(let i of candles)
    {
        if (i > tallest)
        {tallest = i}
    }
    for(let j of candles)
    {
        if (j == tallest)
        {count++}
    }
    return count;
}
const input = "3 2 1 3";
const inputArray = input.split(" ").map(Number);
console.log( birthdayCakeCandles(inputArray))

