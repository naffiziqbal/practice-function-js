const shoppingCart = [
    {name : "Shirt", price : 1200, quantity: 3},
    {name : "Pant", price : 800, quantity: 4},
    {name : "belt", price : 1200, quantity: 1},
    {name : "Moja", price : 200, quantity: 5},
    {name : "T-Shirt", price : 400, quantity: 6},
]

function shopping(products){
    let sum = 0
    for(let i = 0; i < products.length; i ++){
        const items = products[i];
        const toatalItems = items.price * items.quantity;
        sum = sum + toatalItems;
    }
    return sum

}

const expence = shopping(shoppingCart)
console.log(expence)
