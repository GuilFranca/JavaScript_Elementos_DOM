const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
// Criação de um objeto nativo do javascript Audio
const musica = new Audio('./sons/luna-rise-part-one.mp3'); // readFile() Leitura de quando o arquivo for utilizado
// o audio possui 6min e normalmente quando ela termina, a mesma para, então utilizaremos loop para que a música não pare de tocar
musica.loop = true;

// change é utilizado em inputs do tipo check-box
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

function alterarContexto(contexto) {

    botoes.forEach(function(contexto) {
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    
    switch(contexto) {
        case 'foco':
            titulo.innerHTML =`Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    }
}

focoBt.addEventListener("click", function() {
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener("click", function() {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener("click", function() {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})