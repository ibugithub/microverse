function plusMinus(ar) {
    // Write your code here
    let postive_ratio = 0;
    let negetive_ratio = 0;
    let zero_ratio = 0;
    for (let element of ar) 
    {
        if (element == 0)
        {
            zero_ratio++
        }
        else if(element > 0) 
        {
            postive_ratio++
        }
        else {negetive_ratio++}
    } 
    console.log((postive_ratio / ar.length).toFixed(6))
    console.log((negetive_ratio / ar.length).toFixed(6)) 
    console.log((zero_ratio / ar.length).toFixed(6))
}

const input = "-4 3 -9 0 4 1";
const inputArray = input.split(" ").map(Number);
plusMinus(inputArray)

