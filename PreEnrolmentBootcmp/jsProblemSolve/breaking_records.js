function breakingRecords(scores) {
    // Write your code here
    let max = scores[0]
    let maxCount = 0
    let min = scores[0] 
    let minCount = 0 
    const record = []
    for(let score of scores)
    {
        if(score > max) 
        {
            maxCount++
            max = score
        } 
        else if(score < min)
        {
            minCount++
            min = score
        }
    }
    record[0] = maxCount
    record[1] = minCount
    return record
}
const input = "10 5 20 20 4 5 2 25 1";
const inputArray = input.split(" ").map(Number);
console.log( breakingRecords(inputArray))

