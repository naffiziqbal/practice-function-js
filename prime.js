const nu = [ 1,2,3,4,5,6,7,8,9]

function primeNum(n){
    for( let i = 2; i < n ; i ++){
        i = nu[i]
        if( n % i === 0){
            console.log("hello")
        } else if( n % i !== 0){
            console.log("Not")
        }
        else if( n  === i * i){
            console.log("Fuck")
        }
        else{
            return false
        }
        }
    }

const myPrime = primeNum(nu)
