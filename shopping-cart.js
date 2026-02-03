
const products = [
    {name:"Phone",model:"Samsung-e54",price:19500, quantity:1},
    {name:"shirt",brand:"Polo",price:2950, quantity:3},
    {name:"pant",brand:"Smartex",price:950, quantity:1},
    {name:"Shoe",brand:"Bata",price:3490, quantity:1}]

    function getTotal(products)
    {
        let total = 0;
        for(let product of products)
        {
            const prodcutTotalCost = product.price * product.quantity;
            total = total + prodcutTotalCost;
        }

        return total;
    }

    const play = getTotal(products);
    console.log("Your total bill: ",play," BDT.");