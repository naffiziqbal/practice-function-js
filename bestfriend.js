
const names = ['Nafiz Iqbal', "Tanvir Hossain", 'Sheikh Saikat', 'Dewan Abir', 'Mobin Dewan', "Ismit Jahan Protyasha", 'Jakia Sultana Sayma', "Khadiza Akter Liza" ];


function bestFriend(names){
    let biggestName = names[0];
    for( let i = 0; i < names.length; i ++){
        const name = names[i];
        if(name.length > biggestName.length){
            biggestName = name
        }
    }
    return biggestName
}
const myBestFriend = bestFriend(names);
console.log(myBestFriend)

