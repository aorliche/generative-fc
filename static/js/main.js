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
    $('#preset').addEventListener('change', () => {
        const idx = $('#preset').selectedIndex;
        const val = $('#preset').options[idx].value;
        let [age, sex, race] = val.split('-');
        age = parseInt(age);
        $('#age').value = age;
        $('#age-value').innerText = age;
        if (sex == 'male') {
            $('#male').checked = true;
        } else {
            $('#female').checked = true;
        }
        for (let i=0; i<$('#race').options.length; i++) {
            if ($('#race').options[i].value == race) {
                $('#race').selectedIndex = i;
                break;
            }
        }
    });
});
