/* Wood Calculator 

Main Task :- Count How many Wood You Would need to Complete Your Furniture Work

Sub Task :- 
1. Declair A fuction 
2. Declair required wood for Per Furniture .
3. Take Values From The User.
4. 


*/

function woodRequired (totalChair, totalBed, totalShowCase){
    const perChairWood = 3;
    const perBedWood = 50;
    const perShowCaseWood = 75;

    const totalBedWood = perBedWood * totalBed ;
    const totalChairWood = perChairWood * totalChair;
    const totalShowCaseWood = totalShowCase * perShowCaseWood;

    const totalWood = totalBedWood + totalChairWood + totalShowCaseWood;

    return totalWood;
}

const totalWoodRequired = woodRequired(8, 2, 0);

console.log(totalWoodRequired);
