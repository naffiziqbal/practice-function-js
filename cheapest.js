const phones = [
    {name : "SamSung", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 42000,  color: 'Voilet'},
    {name : "Oppo", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 32000,  color: 'Voilet'},
    {name : "Xiomi", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 52000,  color: 'Voilet'},
    {name : "Redmi", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 62000,  color: 'Voilet'},
    {name : "WalTon", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 72000,  color: 'Voilet'},
    {name : "Symphony", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 82000,  color: 'Voilet'},
    {name : "Htc", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 22000,  color: 'Voilet'},
    {name : "SamSung A12", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 12000,  color: 'Voilet'},
    {name : "SamSung", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 92000,  color: 'Voilet'},
    {name : "SamSung", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 142000,  color: 'Voilet'},
    {name : "SamSung", camera : "64MP", storage :" 64gb", RAM : "4gb" , price : 142000,  color: 'Voilet'},
]


function cheapestPhone(phones){
    let cheapest = phones[0];
    for( let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}


const mySelection = cheapestPhone(phones);
console.log(mySelection)
