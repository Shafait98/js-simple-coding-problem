
const phones = [ {brand : "Samsung", model:"Galaxy E54",price:3200000,color:"White"},
    {brand : "One Plus", model:"7t pro",price:49450,color:"black"},
    {brand : "i-Phone", model:"17 pro max",price:250000,color:"White"},
    {brand : "Huawei", model:"P-40 ultra",price:89000,color:"space-black"}

]
function cheapPhone(phones)
{
    let min = phones[0]
    for(let phn of phones)
    {
        if(phn.price < min.price)
        {
         min = phn;
        }
    }
    return min;
}

const play = cheapPhone(phones);
console.log("cheapest phone is: ", play);