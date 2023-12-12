const $ = q => document.querySelector(q);
const $$ = q => [...document.querySelectorAll(q)];

window.addEventListener('load', () => {
    $('#number').addEventListener('input', () => {
        let val = $('#number').value;
        val = 10 ** parseFloat(val);
        $('#number-value').innerText = Math.round(val);
    });
    $('#age').addEventListener('input', () => {
        let val = $('#age').value;
        $('#age-value').innerText = parseInt(val);
    });
});
