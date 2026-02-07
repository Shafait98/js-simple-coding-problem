
const products =[
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000},
    {id: 1, name:'iphone',price: 220000},
    {id: 1, name:'Canons Camera',price: 120000},
    {id: 1, name:'xiome p98 phone',price: 12200},
    {id: 1, name:'lenevo laptop',price: 57000},
    {id: 1, name:'Asus ROG Gaming Laptop',price: 228000},
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000},
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000},
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000},
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000},
    {id: 1, name:'Asus Tuf Gaming Laptop',price: 120000}
];

function getMatched(products, search)
{
    const matchProducts = [];
    for(let product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            matchProducts.push(product);
        }
    }

    return matchProducts;
}

const play = getMatched(products,'laptop');
console.log(play);