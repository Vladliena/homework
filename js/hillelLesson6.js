let userWord;
let style;
let finalString = ' '
let numberOfTries = 3;

let userChoice = confirm(`Tell me three most important words 💚`);

if (userChoice) {
    for (let i = 1; i <= numberOfTries; i++) {
        userWord = prompt(`Word: #${i}.`)
        if (userWord && isNaN(userWord)) {
            style = prompt(`uppercase/lowercase/capitalize`)
        }
        if (!userWord || !isNaN(userWord)){
            userWord = prompt(`Word: #${i}.`)
            i--
        }
        if (style === `uppercase` ) {
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