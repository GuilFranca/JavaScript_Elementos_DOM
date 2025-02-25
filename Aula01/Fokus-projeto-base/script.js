const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener("click", function() {
    html.setAttribute('data-contexto', 'foco');
})

curtoBt.addEventListener("click", function() {
    html.setAttribute('data-contexto', 'descanso-curto');
})

longoBt.addEventListener("click", function() {
    html.setAttribute('data-contexto', 'descanso-longo');
})