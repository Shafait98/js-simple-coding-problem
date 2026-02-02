const number = [7,4.5,6.3,5,5.7,5.5,10,11.5]

function getMax(numbers)
{
  let max = numbers[0];

  for(num of numbers)
  {
    if(num > max)
    {
        max = num;
    }
  }

  return max;
}

const play = getMax(number);
console.log("Max height: ", play);