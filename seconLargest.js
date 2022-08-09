const numbers = [12, 35, 1, 10, 34, 1, 39,24,40,80,36,43,76,59,88,75,30,8,97,41,28,66,92,53,1,32,29,82,15,74,44,54,35,14,49,10,19,58,13,12,84,22,87,51,79,73,3,38];

const sortArr = numbers.sort(); // To Check The biggest Number, as I generate this From Google! 
console.log(sortArr)

function secondLargest(arr) {
    let largest = [0]; 
    let secondLarge = [0]
    //First For Block For Checking The Largest Number
    for (i = 0; i < arr.length; i++) {
        const number = numbers[i];
        if (number > largest) {
            largest = number

        }
        // console.log(number);
    }
    console.log("Largest Number is ", largest)


    // Second For Block Is For Comparing The Largest Number With the Second Laegest Number Of The Array! If Founded Store it On Second Large Variable! 
    for (let i = 0; i < arr.length; i++) {
        const number = numbers[i];
        if (number > secondLarge && number < largest) {
            secondLarge = number
        }

    }
    console.log(`The Second Largest Number is : `, secondLarge);
    return secondLarge; // Return Second Large Number as We Are Finding Secondlarge Number 


}









secondLargest(numbers)
