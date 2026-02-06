function getPrice(products)
{   if(typeof products !== 'object')
{
    return "Please input an object";
}
    totalQuantity = products.quantity;
    const productPrice = products.price * totalQuantity;
    return productPrice;
}

// const play = getPrice({name:'Shirt',brand:'Bran',quantity:7,price:2200});
const play = getPrice(2,33);
console.log(play);