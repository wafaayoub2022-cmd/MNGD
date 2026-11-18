let word = document.getElementById("word");

let reselt = document.getElementById("reselt");

let submit = document.getElementById("submit");



submit.onclick = function (event) {

    event.preventDefault();

    let newword = ""

    // الكلمات

    let alphabit = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي7"

    let value = word.value;

    for (let i = 0; i < value.length; i++) {

        let letter = value[i];

        let index = alphabit.indexOf(letter)

        if (index === -1) {

            reselt.value = "mok nta thani"

        }

        newword += alphabit[index + 1];

        reselt.value = newword;

    }



