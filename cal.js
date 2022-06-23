 var num1 = window.prompt('Enter a number');
 var mathOperation =window.prompt("Enter the operator you want to use:+ , -, * , /");
 var num2 = window.prompt('Enter a another number');
 
 num1= parseFloat(num1)
 num2 = parseFloat(num2)

var result;
 if (mathOperation == '+'){
    result = num1+num2
 } else if (mathOperation == '-'){
    result = num1-num2
 } else if (mathOperation == '*'){
    result = num1*num2
 } else if (mathOperation == '/'){
    result = num1/num2
}
 alert(result);