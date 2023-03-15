function hurdleRace(k, height) {
    // Write your code here
    let maxHeight = 0;
    for(let h of height)
    {
        if (h > maxHeight)
        {
            maxHeight = h
        }
    } 
    if(k >= maxHeight){return 0}
    else{return maxHeight - k}
}
const input = "2 5 4 5 2";
const inputArray = input.split(" ").map(Number);
console.log( hurdleRace(7,inputArray))





// // // more smaller way of doint it......
function hurdleRace(k, height) {
    let maxHeight = Math.max(...height)
    if(k >= maxHeight){return 0}
    else{return maxHeight - k}
}
