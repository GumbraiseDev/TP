let ival = prompt("valeur de i")
let jval = prompt("valeur de j")
let kval = prompt("valeur de k")

function comptage(i, j, k=1) {
    for (let l = i; l < j; l = l + k) {
        document.writeln(l)
    }
}

comptage(ival, jval);
