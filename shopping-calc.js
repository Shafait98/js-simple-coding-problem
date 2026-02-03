
const products = [ {name :"Shirt", price : 870},
                    {name :"pant", price : 650},
                    {name :"Shoe", price : 1870}

]

function getTotal(products)
{
let total = 0;

for(let product of products)
{
    total = total + product.price;
}

return total;
}

let play = getTotal(products);
console.log("Your total shopping cost: ",play, " BDT");