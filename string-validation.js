function getName(firstName,lastName)
{
    if(typeof firstName !== 'string')
    {
        return "Please enter first name as a string!";
    }
    else if(typeof lastName !== 'string')
    {
        return "please enter last name as a string!";
    }

    return firstName + " " + lastName;
}

const play = getName("Farhan","Ahmed");
console.log("Name: ", play);