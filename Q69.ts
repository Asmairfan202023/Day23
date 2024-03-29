// Question 69:Dividing and finding the remainder: Write a funtion that devides two numbers and returns both the quotient and the remainder.Use an object to return both values.
// This function divides two numbers and find the quotient and reminder
function remainderQuotient(dividend:number,divisor:number):{ quotient:number; remainder:number} {
    let quotient = Math.floor(dividend/divisor);
    let remainder = dividend%divisor;
    return {quotient, remainder};
}
console.log(remainderQuotient(80,6));