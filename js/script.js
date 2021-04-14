const msg = document.querySelector('.msg'),
    gess = document.querySelector('input'),
    btn = document.querySelector('.btn');
let play = false;
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "gess";
        gess.classList.toggle('hidden');
    }
})