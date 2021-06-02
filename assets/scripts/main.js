const BTN_LOCK = document.querySelector('.lock__input');
const BTN_SWITCH = document.querySelector('.switch__input');
const LAYOUT1 = document.querySelector('.layout1');
const LAYOUT2 = document.querySelector('.layout2');
const LAYOUT3 = document.querySelector('.layout3');


window.addEventListener('DOMContentLoaded', () => {
    BTN_LOCK.checked = true;
    BTN_SWITCH.disabled = true;
});

BTN_LOCK.addEventListener('change', () => {
    if (BTN_LOCK.checked) {
        BTN_SWITCH.disabled = true;
        BTN_SWITCH.checked = false;
        showLayout(1);
    } else {
        BTN_SWITCH.disabled = false;
        showLayout(2);
    }
});

BTN_SWITCH.addEventListener('change', () => {
    BTN_SWITCH.checked
        ? showLayout(3)
        : showLayout(2);
});

function showLayout(number) {
    if (number == 1) {
        LAYOUT1.style.display = "block";
        LAYOUT2.style.display = "none";
        LAYOUT3.style.display = "none";
        return;
    }
    if (number == 2) {
        LAYOUT1.style.display = "none";
        LAYOUT2.style.display = "block";
        LAYOUT3.style.display = "none";
        return;
    }
    if (number == 3) {
        LAYOUT1.style.display = "none";
        LAYOUT2.style.display = "none";
        LAYOUT3.style.display = "block";
        return;
    }
}