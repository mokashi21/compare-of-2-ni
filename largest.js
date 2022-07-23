function max(num1, num2) {
    
if (parseFloat (num1) > parseFloat (num2) ) {
    return num2;
}else if ( parseFloat(num1) < parseFloat(num2) ) {
    return num1;
} else {
    console.log(num1  + " and " +  num2  + " are equal !");
}

}

console.log(max(1,5) + " - This is the Not Largest Number due to its value !")