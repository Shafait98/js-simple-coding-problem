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
    
    else if(operation === 'division')
    {
        const result = division(a,b);
        return result;
    }
}