

function maxNum(num1,num2,num3)
{
    if(num1 > num2 && num1 > num3)
    {
        return ("Shafait got the max num");
    }

    else if (num2 > num1 && num2 > num3)
    {
        return ("Samanta got the max num");
    }

    else
        {
            return("Farhan got the max num");
        }
}


const shafait = 98;
const samanta = 999;
const farhan = 100;

let play = maxNum(shafait,samanta,farhan);
console.log(play);

// get max with max() function

const max = Math.max(12343,3434,334,676755,54,3353,343,2323,2323,23);
console.log("get the max value with Math.max(): ", max);