//** Have to estimate the wood quantity based on how many furniture I make. the unit would be cft(cubic ft)*/

function woodQuantity(chair,table,bed,almirah)
{
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const perAlmirahWood = 70;

    const chairTotalWood = chair * perChairWood;
    const tableTotalWood = table * perTableWood;
    const bedTotalWood = bed * perBedWood;
    const almirahTotalWood = almirah * perAlmirahWood;


    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood + almirahTotalWood;

    return totalWood;
}

const wood = woodQuantity(3,2,1,2);
console.log("Total wood needed: ", wood ,"cft");