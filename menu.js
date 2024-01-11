let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener('DOMContentLoaded', function () {
    let imgPorts = document.querySelectorAll('.img-port');

    imgPorts.forEach(function (imgPort) {
        imgPort.addEventListener('click', function () {
            toggleOverlay(this);
        });

        imgPort.addEventListener('touchstart', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do toque, como o zoom
            toggleOverlay(this);
        });
    });
});

function toggleOverlay(element) {
    let overlay = element.querySelector('.overlay');
    overlay.classList.toggle('tocado');
}