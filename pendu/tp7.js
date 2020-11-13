let word = prompt("Donne moi un mot");
let p = document.getElementsByTagName('p');
let img = document.getElementsByTagName('img');
let letter = "";
let s = word.split('');
let point = 0;
let pvalue = ""

for (let i = 0; i < word.length; i++) {
    pvalue += "_"
}
let splited = pvalue.split('');

p[0].innerHTML = pvalue;
while (true) {
    if (letter == 0 || letter > 1) {
        letter = prompt("Donne moi une lettre");
    } else {
        if (point < 10) {
                if (s.indexOf(letter) == -1) {
                    point++;
                    img[0].src = "public/img/pendu"+point+".png";
                } else {
                    let indexod = s.indexOf(letter);
                    splited[indexod] = letter;
                    console.log(splited)
                    p[0].innerHTML = splited.join('')
                    if (splited.join('') == word) {
                        alert('Tu as gagné');
                        break;
                    }
                }
                letter = "";
        } else {
            alert('Tu as perdu');
            break;
        }
    }
}