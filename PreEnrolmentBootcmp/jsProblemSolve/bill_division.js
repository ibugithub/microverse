function bonAppetit(bill, k, b) {
    // Write your code here
    let actual_bill = 0;
    for(let i = 0; i < bill.length; i++)
    {
        if ( i != k)
        {
            actual_bill+=bill[i]
        }
    }
    actual_bill /=2;
    if (actual_bill == b)
    {return "Bon Appetit"}
    else {
        return b - actual_bill
    }
}
const input = "3 10 2 9";
const inputArray = input.split(" ").map(Number);
console.log( bonAppetit(inputArray, 1, 7))

