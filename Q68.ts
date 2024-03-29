// Question68:Multiplying Decimals: Create a function that accepts two decimal numbers and return their product. Round the result to decimal place
// This function multiplies two decimal numbers 
 function multiplyDeci(num1:number, num2:number):number{
    return Math.round(num1*num2)*100/100;
 }
 console.log(multiplyDeci(1.5,3.4));