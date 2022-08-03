const date = new Date()
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7;

const orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3;

const kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10;

const divisionSumForTask = 100;

const appleFinalPrice = (appleCount * applePrice) - ((appleCount * applePrice) / divisionSumForTask * appleSalePercent).toFixed();
const orangeFinalPrice = (orangeCount * orangePrice) - ((orangeCount * orangePrice) / divisionSumForTask * orangeSalePercent).toFixed();
const kiwiFinalPrice = (kiwiCount * kiwiPrice) + ((kiwiCount * kiwiPrice) / divisionSumForTask * kiwiCountryPercent);

const captionString = 'Food price ≠'

console.log(`${captionString.replaceAll("≠", "-")} ${day}.${month}.${year}\n 
${captionString.replaceAll("≠", "for")} ${appleCount} ${apple} = ${appleFinalPrice} UAH
${captionString.replaceAll("≠", "for")} ${orangeCount} ${orange} = ${orangeFinalPrice} UAH
${captionString.replaceAll("≠", "for")} ${kiwiCount} ${kiwi} = ${kiwiFinalPrice} UAH\n
${captionString.replaceAll("≠", "for all products")} ${kiwiFinalPrice + orangeFinalPrice + appleFinalPrice} UAH`)
