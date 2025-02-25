const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');

const musicaFocoInput = document.querySelector('#alternar-musica');
// Criação de um objeto nativo do javascript Audio
const musica = new Audio('./sons/luna-rise-part-one.mp3'); // readFile() Leitura de quando o arquivo for utilizado
// o audio possui 6min e normalmente quando ela termina, a mesma para, então utilizaremos loop para que a música não pare de tocar
const beep = new Audio('./sons/beep.mp3');
const play = new Audio('./sons/play.mp3');
const pause = new Audio('./sons/pause.mp3');


let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

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

// foi criada uma função dentro de uma constante
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        zerar();
        beep.play();
        alert('Tempo finalizado!');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

function iniciarOuPausar() {
    if(intervaloId){
        zerar();
        pause.play();
        return
    }
    // é utilizado o método setInterval que utiliza dois parametros o método que desa ser executado e o tempo em milissegundos
    intervaloId = setInterval(contagemRegressiva, 1000);
    play.play();
}

function zerar() {
    // interrompe a execução de um código
    clearInterval(intervaloId);
    intervaloId = null;
}

// quando a função está armazenada em uma variável não é necessário utilizar () depois da função e a função só pode ser chamada depois da criação da mesma
startPauseBt.addEventListener("click", iniciarOuPausar);

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