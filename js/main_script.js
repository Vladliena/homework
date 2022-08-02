let date = new Date().getDate();
let month = new Date().getMonth();
month++
let year = new Date().getFullYear();

let fullDate = date + '.' + month + '.' + year;

const apple = `🍎`
applePrice = 10
appleCount = 3
appleSalePercent = 0.7;


const orange = `🍊`
orangePrice = 12
orangeCount = 2
orangeSalePercent = 0.3;

const kiwi = `🥝`
kiwiPrice = 15
kiwiCount = 10
kiwiCountryPercent = 0.10;

let appleFinalPrice = ((applePrice - appleSalePercent) * appleCount).toFixed();
let orangeFinalPrice = ((orangePrice - orangeSalePercent) * orangeCount).toFixed();
let kiwiFinalPrice = (kiwiPrice * (1 + kiwiCountryPercent) * kiwiCount).toFixed();

let captionString = 'Food price ≠ '.replaceAll("≠", "-") + fullDate;
console.log(captionString)

console.log('Final price for', appleCount + " " + apple + " = " + appleFinalPrice + " " + 'UAH');
console.log('Final price for', orangeCount + " " + orange + " = " + orangeFinalPrice + " " + 'UAH');
console.log('Final price for', kiwiCount + " " + kiwi + " = " + kiwiFinalPrice + " " + 'UAH');

console.log('Final price for all products =',+kiwiFinalPrice+ +orangeFinalPrice+ +appleFinalPrice + " " + 'UAH')






