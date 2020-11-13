let num = document.getElementById('note');

window.addEventListener("DOMContentLoaded", () => {
    num.addEventListener("change", () => {
        if(num.value >= 0 && num.value <= 7) {
            num.style.background = "red";
        }
        if(num.value >= 8 && num.value <= 12) {
            num.style.background = "orange";
        }
        if(num.value >= 13 && num.value <= 20) {
            num.style.background = "green";
        }
    })
})