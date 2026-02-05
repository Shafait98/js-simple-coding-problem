function multiply(num1,num2)
{
    if(typeof num1 !== 'number' && typeof num2 !=='number')
    {
        return "please enter a number";
    }
    const mult = num1 * num2;
    return mult ;
}

const play = multiply("da",2);
console.log("Your result is: ", play);