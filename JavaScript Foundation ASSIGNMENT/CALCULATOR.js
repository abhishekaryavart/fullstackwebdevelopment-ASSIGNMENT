var num1=10;
var num2=5;
var prompt=require("prompt-sync")()
var operation=prompt("choose an operator");

//use  a switch statement to perform the selected operation

switch(operation){
    case "+":
        var result=num1+num2;
        console.log("sum :"+result);
        break;

        case "-":
        var result=num1-num2;
        console.log("Difference :"+result);
        break;

        case "*":
        var result=num1*num2;
        console.log("Product :"+result);
        break;

        case "/":
        var result=num1/num2;
        console.log("Quotient :"+result);
        break;
        default:
            console.log("Invalid Operator");
}