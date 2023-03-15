function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for (let element of ar) 
    {
        sum += element;
    }
    console.log("the sum is ", sum)
}

const input = "1000000001 1000000002 1000000003 1000000004 1000000005";
const inputArray = input.split(" ").map(Number);

aVeryBigSum(inputArray)
