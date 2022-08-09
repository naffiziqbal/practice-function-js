function factorial(n){
    let result = 1;
    for(i = n; i >= 1; i--){
        result *= i;
        console.log(i);
    }
    return result;
}

console.log(factorial(8))
