let entrada = prompt('Qual o seu nome?');

let modeloClicado;
let golaClicada;
let tecidoClicado;
let modelo;
let gola;
let tecido;
let modeloEscolhido;
let golaEscolhida;
let tecidoEscolhido;
let quantidadePedidos;
let urlImagem;

function selecionarModelo(modeloClicado){
    const modeloSelecionadoAnteriormente = document.querySelector('.modelo .selecionado');    

    if (modeloSelecionadoAnteriormente !== null){
        modeloSelecionadoAnteriormente.classList.remove('selecionado');
    }    
    
    modeloClicado.classList.add('selecionado'); 

    divpai = modeloClicado.parentNode
    modelo = divpai.querySelector('p').innerHTML; 
    
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

    divpai = golaClicada.parentNode
    gola = divpai.querySelector('p').innerHTML; 

    ativarBotaoConfirmarPedido();
}

function selecionarTecido(tecidoClicado){

    const tecidoSelecionadoAnteriormente = document.querySelector('.tecido .selecionado');

    if (tecidoSelecionadoAnteriormente !== null){
        tecidoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    tecidoClicado.classList.add('selecionado');
    
    divpai = tecidoClicado.parentNode
    tecido = divpai.querySelector('p').innerHTML; 

    ativarBotaoConfirmarPedido();
}

document.querySelector('input').addEventListener('input', ativarBotaoConfirmarPedido);

document.querySelector('.botao').addEventListener('click', confirmarPedido);

function urlValidar(string) {
    try {
        let url = new URL(string);
        return true

    } catch (err) {
        return false;
    }
}

function ativarBotaoConfirmarPedido(){
    urlImagem = document.querySelector('input').value;
    console.log(urlImagem)

    console.log(`${modelo}  -  ${gola}  -  ${tecido} - ${urlValidar(urlImagem)}`)
    if ((modelo !== undefined) && (gola !== undefined) && (tecido !== undefined) && (urlValidar(urlImagem))){
                const botao = document.querySelector('.botao');
                console.log(botao)
                botao.classList.add('ativo');
             }
        }

function trocarModelo(){
    if(modelo == "T-shirt"){
        modelo = "t-shirt"
    }
    else if(modelo == "Camiseta"){
        modelo = "top-tank"
    }

    else{
        modelo = "long"
    }
}

function trocarGola(){
    if(gola == "Gola V"){
        console.log(gola)
        gola = "v-neck"
        console.log(gola)
    }
    else if(gola == "Gola Redonda"){
        gola = "round"
    }

    else{
        gola = "polo"
    }
}

function trocarTecido(){
    if(tecido == "Seda"){
        tecido = "silk"
    }
    else if(tecido == "Algodão"){
        tecido = "cotton"
    }

    else{
        tecido = "polyester"
    }
}

function confirmarPedido(){
    let confirma = confirm('Deseja confirmar o pedido?')
    console.log(confirma)
    trocarModelo()
    trocarGola()
    trocarTecido()
    if(confirma == true){
        function enviarBlusa(modelo, gola, tecido, link, quem, autor){
            const url = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
            
            const informacoes = {model: modelo, neck: gola, material: tecido, image: link, owner: quem, author: autor};
        
            console.log(informacoes)
            axios.post(url, informacoes)
                .then(response => {
                    console.log(response.data)
                    pedidos()
                })
                .catch(error => {
                    alert('Ops, não conseguimos processar sua encomenda')
                    console.log(`enviarBlusa: ${error}`)
                }); 
        }
        enviarBlusa(modelo, gola, tecido, urlImagem, entrada, entrada);
    }
}

function pedidos(){
    const pedidos = document.querySelector(".footer")
    axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
        .then(response => {
            let item = response.data;
            console.log(item)
            let add = `<h1>Últimos pedidos</h1>
                        <div class="pedidos">`

            quantidadePedidos = item.length;
            console.log(quantidadePedidos)
            for (let i = 0; i < quantidadePedidos; i++)
            {
            add += `<div class="pedido ${item[i].id}">
                <img src="${item[i].image}" alt="Pedido">
                <p>Criador: ${item[i].owner}</p>
            </div>`
            }
            add += `</div>`
            pedidos.innerHTML = add
        })
        .catch(error => {
            console.log(`pedidos: ${error}`)
        });
}

setInterval(pedidos, 3000)

document.querySelector('.footer').addEventListener('click', function (e) {
    let string = e.path[1].className.split(' ')[1]
    console.log(string)
    
});