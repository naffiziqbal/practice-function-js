let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

//  Sum OF Array


function sumOfArr(number){
    let sum = 0;
    for(i = 0; i < number.length; i++){
        const elements = number[i];
        // console.log(elements)
        sum = sum + elements;
    }
    return sum;
}

sumOfArr(numbers)
const sumOfArrFunc = sumOfArr(numbers);


// Even Number 

function evenNumber(number){
    let evenNumberArray = [];
    for(i = 0; i < number.length; i++){
        const evenNumberElements = number[i];
        if(evenNumberElements % 2 === 0){
            evenNumberArray.push(evenNumberElements)
        }
    }
    return evenNumberArray;
}

const SumOfEvenNumbers = sumOfArr(evenNumber(numbers));



// Odd Numbers  

function oddNumber(number){
    let oddNumberArray = [];
    for(i =0; i < number.length; i++){
        const elements = number[i];
        if(elements % 2 !==0){
            oddNumberArray.push(elements)
        }
    }
    return oddNumberArray
}

const sumOfOddNumber =sumOfArr(oddNumber(numbers));
console.log(`Sum Of Array  `,sumOfArrFunc );
console.log( 'Sum Of Odd Number' ,sumOfOddNumber)
console.log(`Sum Of Even Number`, SumOfEvenNumbers)

