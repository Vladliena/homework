// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();
//
// const apple = `🍎`,
//     applePrice = 10,
//     appleCount = 3,
//     appleSalePercent = 7;
//
// const orange = `🍊`,
//     orangePrice = 12,
//     orangeCount = 2,
//     orangeSalePercent = 3;
//
// const kiwi = `🥝`,
//     kiwiPrice = 15,
//     kiwiCount = 10,
//     kiwiCountryPercent = 10;
//
// const divisionSumForTask = 100;
//
// const appleFinalPrice = (appleCount * applePrice) - ((appleCount * applePrice) / divisionSumForTask * appleSalePercent).toFixed();
// const orangeFinalPrice = (orangeCount * orangePrice) - ((orangeCount * orangePrice) / divisionSumForTask * orangeSalePercent).toFixed();
// const kiwiFinalPrice = (kiwiCount * kiwiPrice) + ((kiwiCount * kiwiPrice) / divisionSumForTask * kiwiCountryPercent);
//
// const captionString = 'Food price ≠';
// const priceFor = captionString.replaceAll("≠", "for")
//
// console.log(`${captionString.replaceAll("≠", "-")} ${day}.${month}.${year}\n
// ${priceFor} ${appleCount} ${apple} = ${appleFinalPrice} UAH
// ${priceFor} ${orangeCount} ${orange} = ${orangeFinalPrice} UAH
// ${priceFor} ${kiwiCount} ${kiwi} = ${kiwiFinalPrice} UAH\n
// ${priceFor} all products ${kiwiFinalPrice + orangeFinalPrice + appleFinalPrice} UAH`);

// let finalPrice = 0;
//
// const hamburger = 10;
// const cheeseburger = 15;
// const doubleCheese = 5;
//
//
// let bulka = prompt('hamburger or cheeseburger?')
// if (bulka !== null) {
//     bulka = bulka.replaceAll(` `, ``).toLowerCase();
// }
//
// if (bulka === 'cheeseburger') {
//     finalPrice += cheeseburger
//     let userChoiceBulka = confirm(`Would you like to add double cheese?`);
//     if (userChoiceBulka) {
//         finalPrice += doubleCheese
//     }
// }
// else {
//     finalPrice += hamburger;
//     bulka = 'hamburger'
// }
//
// const potatoSmall = 10;
// const potatoMiddle = 15;
// const potatoBig = 20;
//
// let userChoicePotato = confirm('Would you like potato?');
// let potatoSize;
// if (userChoicePotato) {
//     potatoSize = prompt('Choose potato size: small,middle or big')
//     if (potatoSize !== null) {
//         potatoSize = potatoSize.replaceAll(` `, ``).toLowerCase();
//     }
//     if (potatoSize === 'small') {
//         finalPrice += potatoSmall;
//     } else {
//         finalPrice += potatoSmall;
//         potatoSize = 'small'
//     }
//     if (potatoSize === 'middle') {
//         finalPrice += potatoMiddle
//     }
//     if (potatoSize === 'big') {
//         finalPrice += potatoBig
//     }
// }
//
// const ketchup = 2;
// const mayonnaise = 3;
// let sauce;
//
// let userChoiceSauce = confirm(`Would you like sauce?`)
// if (userChoiceSauce) {
//     sauce = prompt(`Choose sauce: ketchup/mayonnaise`)
//     if (sauce !== null) {
//         sauce = sauce.replaceAll(` `, ``).toLowerCase();
// }
//     if (sauce === 'ketchup') {
//         finalPrice += ketchup
//     } else {
//         finalPrice += ketchup
//         sauce = 'ketchup'
//     }
//
//     if (sauce === 'mayonnaise') {
//         finalPrice += mayonnaise
//     }
// }
//
// document.write(`<h2>Your order:</h2>
//     <ul>
//         <li>Bulka 🍔: ${bulka}</li>`);
// if (userChoicePotato) {
//     document.write(`<li>Potato 🍟: ${potatoSize}</li>`);
// }
//
// if (userChoiceSauce) {
//     document.write(`<li>Sauce 🧂: ${sauce}</li>`);
// }
//
// document.write(`</ul>
//     <p>Price: $ ${finalPrice}</p>
// `);


// let userName;
// let email;
// let surname;
// let birthYear;
//
// while (!userName) {
//     userName = prompt('What is your name?');
//     if (userName) userName = userName.trim();
// }
// if (userName) {
//     userName = userName.trim();
//     surname = prompt('What is your surname?');
// }
//
// while (!surname) {
//     surname = prompt('What is your surname?');
//     if (surname) surname = surname.trim();
// }
// if (surname) {
//     surname = surname.trim();
//     email = prompt('What is your email?');
// }
//
// while (!email || !email.includes('@') || email.startsWith('@') || email.endsWith('@')){
//     email = prompt('What is your email?');
//     if (email) email = email.trim().toLowerCase();
// }
// if (email) {
//     email = email.trim().toLowerCase();
//     birthYear = prompt('What is your birth date?');
// }
//
// while (!birthYear){
//     birthYear = prompt('What is your birth year?');
//     birthYear = birthYear.replaceAll(' ','')
// }
// if (birthYear){
//     birthYear = birthYear.replaceAll(' ','')
// }
//
// let age = new Date().getFullYear() - birthYear;
//
// document.write(`<ul>`)
//
// if (surname) {
//     document.write(`<li>Full Name: ${userName} ${surname}</li>`);
// }
//
// if (email) {
//     document.write(`<li>email: ${email}</li>`);
// }
//
// if (birthYear) {
//     document.write(`<li>Age: ${age}</li>`);
// }
// document.write(`</ul>`);

let userWord;
let style;
let finalString = ' '
let numberOfTries = 3;

let userChoice = confirm(`Tell me three most important words 💚`);

if (userChoice) {
    for (let i = 1; i <= numberOfTries; i++) {
        userWord = prompt(`Word: #${i}.`)
        userWord = userWord.replaceAll(" ", "")
        if (userWord && isNaN(userWord)) {
            style = prompt(`uppercase/lowercase/capitalize`)
            userWord = userWord.replaceAll(" ", "")
        }
        if (!userWord || !isNaN(userWord)){
            userWord = prompt(`Word: #${i}.`)
            userWord = userWord.replaceAll(" ", "")
            i--
        }
        if (style === `uppercase`) {
            finalString += `${userWord} `.toUpperCase()
        }
        if (style === `lowercase`) {
            finalString += `${userWord} `.toLowerCase()
        }
        if (style === `capitalize`) {
            finalString += `${userWord} `.charAt(0).toUpperCase()+userWord.slice(1)
        }
    }
}
else {
}

alert(finalString)