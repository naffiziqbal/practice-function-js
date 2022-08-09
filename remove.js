/* To Do 
Main Task :- Remove Duplicate Names From An Array. 

Sub Task : 
1. Get  an array #done
2. Get Elements From the array Using Loop  #done
3. check if the elements are included in the Array  #done
4. Push and Returnd the Filterd array #done
5. Call the Functiion  # done

*/


const names = [ 'Nafiz', 'Iqbal', 'Tanvir', 'fahad', 'Hossain', 'Saikat', 'fahad', 'Nishad', 'Saad',  'Nafiz', 'Iqbal', 'Tanvir', 'Hossain', 'Saikat', 'Nishad', 'Saad',
'Nafiz', 'fahad', 'Iqbal', 'fahad', 'Tanvir', 'Hossain', 'Saikat', 'Nishad', 'Saad', 'fahad', ];

function removeDuplicate(names){
    const singleName = [];
    for(i = 0; i < names.length; i++){
        const name = names[i];
        if(singleName.includes(name) !== true ){
            singleName.push(name)

        }
    }
    return singleName
}
console.log(removeDuplicate(names))

removeDuplicate(names)


