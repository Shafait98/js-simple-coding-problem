// basic discount function base on quantity of the product

function getDiscount(quantity)
{
    let total = 0;
   if(quantity <= 100)
   {
    total = quantity * 100;
   }
   else if(quantity <=200)
   {
    total = quantity * 90;
   }
   else
    {
        total = quantity * 70;
    }

    return total;
}

const play = getDiscount(180);
console.log("Your total after discount: ",play, "BDT.")