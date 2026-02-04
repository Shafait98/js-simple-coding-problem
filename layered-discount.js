//** layered discount  */
//** 
// *1st 100 --> 100 tk
// *101 to 200 --> 90 tk
//* above 200 --> 70 tk

function getDiscount(quantity)
{
    const first100Product = 100;
    const secondLayerDiscount = 90;
    const lastLayerDiscount = 70;

    if(quantity <= 100)
    {
        const total = quantity * first100Product;
        return total;
    }

    else if(quantity <= 200)
    {
        const first100Total = 100 * first100Product;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * secondLayerDiscount;
        const total = first100Total + remainingTotal;
        return total;
    }

    else
    {
        const first100Total = 100 * first100Product;
        const second100Total = 100 * secondLayerDiscount;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * lastLayerDiscount;

        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const play = getDiscount(200);
console.log("Your total bill after discount : ",play, "BDT.");