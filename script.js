// DOM elements
let result = document.getElementById('result');
let historic = document.getElementById('historic');
let btn_cancel = document.getElementById('btn_cancel');
let btn_equal = document.getElementById('btn_equal');
let btn_calcul = document.querySelectorAll('#btn_calcul');

// NodeList to array with spread operator
const touches = [...document.querySelectorAll('.btn')];
// add keys to touches with map()
const listeKey = touches.map(touche => touche.dataset.key);

let standValue = "";

// action to all btn 
btn_calcul.forEach((btn_calcul, index) => {
    btn_calcul.addEventListener('click', (e) => {
        let text = e.target.dataset.key;
        standValue += text;
        result.innerHTML = standValue;
    });
});

// action to btn equal
btn_equal.addEventListener('click', function () {
    if (result.innerHTML != "") {
        // divide by 0 management
        if (eval(result.innerHTML) == Infinity || eval(result.innerHTML) == NaN) {
            historic.innerHTML = standValue;
            result.innerHTML = "Div par 0 impossible"
            standValue = "";
        } else {
            historic.innerHTML = result.innerHTML;
            result.innerHTML = eval(result.innerHTML);
            standValue = eval(result.innerHTML);
        }
    } else {
        result.innerHTML = "Entrer un nombre";
    }
});

// action to btn cancel
btn_cancel.addEventListener('click', function () {
    result.innerHTML = "";
    historic.innerHTML = "";
    standValue = "";
});

// error management
window.addEventListener('error', (e) => {
    result.innerHTML = "Erreur de calcul";
    standValue = "";
});