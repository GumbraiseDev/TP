let input = document.getElementsByTagName('input');

window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("mouseout", () => {
            if (input[i].value.length == 0) {
                alert('Le champ est vide')
            }
            let s = input[2].value.split('');
            if (s.indexOf('@') == -1 || s.indexOf('.') == -1) {
                alert('Ce n\'est pas une adresse mail valide')
            }
            var regex = new RegExp(/^(06|07)[0-9]{8}/gi);
    
            if (!regex.test(input[3].value))
            {
                alert('Ce n\'est pas un numéro de téléphone valide')
            }
        })
        input[4].addEventListener("click", () => {
            if (input[i].value.length == 0) {
                alert('Le champ est vide')
            }
            let s = input[2].value.split('');
            if (s.indexOf('@') == -1 || s.indexOf('.') == -1) {
                alert('Ce n\'est pas une adresse mail valide')
            }
            var regex = new RegExp(/^(06|07)[0-9]{8}/gi);
    
            if (!regex.test(input[3].value))
            {
                alert('Ce n\'est pas un numéro de téléphone valide')
            }
        }
    }
})