function add(num1,num2)
{
    return num1 + num2;
}

function subtract(num1,num2)
{
    return num1 - num2;
}

function multiply(num1,num2)
{
    return num1 * num2;
}

function division(num1,num2)
{
    return num1 / num2;
}

function calculator(a,b,operation)
{
    if(operation === 'add')
    {
        const result = add(a,b);
        return result;
    }

    else if(operation === 'subtract')
    {
        const result = subtract(a,b);
        return result;
    }

    else if(operation === 'multiply')
    {
        const result = multiply(a,b);
        return result;
    }

    else if(operation === 'division')
    {
        const result = division(a,b);
        return result;
    }
}

const calc = calculator(20,30,'multiply');
console.log("Result = ", calc)