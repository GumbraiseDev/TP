function sigle() {
    let e = prompt("Donnez moi une phrase avec + de 2 mots")
    let splited = e.match(/\b(\w)/g);
    while (true) {
        if (splited.length > 2) {
            let firstletter = splited.join('')
            document.writeln(firstletter.toUpperCase())
            break
        } else {
            sigle()
        }
    }
}

sigle()