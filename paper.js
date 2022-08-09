function  paperRequirements(firstBookToPrint, secondBookToPrint, thirdBookToPrint){
    const pageRequiresToPrintFirstBook = 100;
    const pageRequiresToPrintSecondBook = 200;
    const pageRequiresToPrintThirdBook = 300;

    const firstBookPageRequire = pageRequiresToPrintFirstBook * firstBookToPrint;
    const secondBookPageRequire = pageRequiresToPrintSecondBook * secondBookToPrint;
    const thirdBookPageRequire = pageRequiresToPrintThirdBook * thirdBookToPrint;

    const totalPageRequire = firstBookPageRequire + secondBookPageRequire + thirdBookPageRequire;

    return totalPageRequire;
}

const myBook = paperRequirements(3, 10, 20);

    console.log(myBook)
