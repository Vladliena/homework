let date = new Date().getDate();
let month = new Date().getMonth();
month++
let year = new Date().getFullYear();

let fullDate = date + '.' + month + '.' + year;

const apple = `🍎`
applePrice = 10
appleCount = 3
appleSalePercent = 7;

const orange = `🍊`
orangePrice = 12
orangeCount = 2
orangeSalePercent = 3;

const kiwi = `🥝`
kiwiPrice = 15
kiwiCount = 10
kiwiCountryPercent = 10;

let applePricePercent = ((applePrice * appleCount)/100 * appleSalePercent).toFixed();
let appleFinalPrice = applePrice*appleCount-applePricePercent;
// code can be shorter if use appleSalePercent = 0.07 ==> (10*3) - (10*3) * 0.07 = 27.9//

let orangePricePercent = ((orangePrice * orangeCount)/100 * orangeSalePercent).toFixed();
let orangeFinalPrice = orangePrice * orangeCount - orangePricePercent;

let kiwiPricePercent = ((kiwiPrice * kiwiCount)/100 * kiwiCountryPercent).toFixed();
let kiwiFinalPrice = kiwiPrice * kiwiCount + +kiwiPricePercent;


let captionString = 'Food price ≠ '.replaceAll("≠", "-") + fullDate;
console.log(captionString)

console.log('Final price for', appleCount + " " + apple + " = " + appleFinalPrice + " " + 'UAH');
console.log('Final price for', orangeCount + " " + orange + " = " + orangeFinalPrice + " " + 'UAH');
console.log('Final price for', kiwiCount + " " + kiwi + " = " + kiwiFinalPrice + " " + 'UAH');

console.log('Final price for all products =',+kiwiFinalPrice+ +orangeFinalPrice+ +appleFinalPrice + " " + 'UAH')

