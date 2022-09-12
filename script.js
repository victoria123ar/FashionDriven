let entrada = prompt('Qual o seu nome?');

let modeloClicado;
let golaClicada;
let tecidoClicado;

function selecionarModelo(modeloClicado){
    
    const modeloSelecionadoAnteriormente = document.querySelector('.modelo .selecionado');    

    if (modeloSelecionadoAnteriormente !== null){
        modeloSelecionadoAnteriormente.classList.remove('selecionado');
    }    
    
    modeloClicado.classList.add('selecionado');  
    console.log(modeloClicado)   
    
    ativarBotaoConfirmarPedido();
}

function selecionarGola(golaClicada){

    // verificar se existe bebida já selecionada anteriormente
    const golaSelecionadaAnteriormente = document.querySelector('.gola .selecionado');

    // se tiver, desmarcar (remover a classe selecionado)
    if (golaSelecionadaAnteriormente !== null){
        golaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    golaClicada.classList.add('selecionado');
    console.log(golaClicada)

    ativarBotaoConfirmarPedido();
}

function selecionarTecido(tecidoClicado){

    const tecidoSelecionadoAnteriormente = document.querySelector('.tecido .selecionado');

    if (tecidoSelecionadoAnteriormente !== null){
        tecidoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    tecidoClicado.classList.add('selecionado');
    console.log(tecidoClicado)   

    ativarBotaoConfirmarPedido();
}

function ativarBotaoConfirmarPedido(){

    if ((modeloClicado !== undefined) && (golaClicada !== undefined) && (tecidoClicado !== undefined)){
                const botao = document.querySelector('.botao');
                console.log(botao)
                botao.classList.add('ativo');
                alert("Confirmar a encomenda?")
                console.log(ativarBotaoConfirmarPedido())
             }
        }
