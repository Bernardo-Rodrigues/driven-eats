let comidaSelecionada = "";
let comidaNome = "";
let comidaPreco = "";
let bebidaSelecionada = "";
let bebidaNome = "";
let bebidaPreco = "";
let sobremesaSelecionada = "";
let sobremesaNome = "";
let sobremesaPreco = "";
let nomeCliente = "";
let enderecoCliente = "";
let total = 0;

let botao = document.getElementById("botao_confirmar");
let tela1 = document.getElementById("tela-informacoes");
let tela2 = document.getElementById("tela-confirmar");
let tela3 = document.getElementById("tela-concluir");

function clicouComida (prato) {
    if(comidaSelecionada != ""){
        desmarcarSelecionado(comidaSelecionada);
    }
    comidaSelecionada = prato;
    marcarSelecionado(comidaSelecionada);
}
function clicouBebida (bebida) {
    if(bebidaSelecionada != ""){
        desmarcarSelecionado(bebidaSelecionada);
    }
    bebidaSelecionada = bebida;
    marcarSelecionado(bebidaSelecionada);
}
function clicouSobremesa (sobremesa) {
    if(sobremesaSelecionada != ""){
        desmarcarSelecionado(sobremesaSelecionada);
    }
    sobremesaSelecionada = sobremesa;
    marcarSelecionado(sobremesaSelecionada);
}
function desmarcarSelecionado(selecionado){
    let check = document.getElementById(`${selecionado}_check`);
    check.parentNode.removeChild(check);
}
function marcarSelecionado(selecionado){
    let itemSelecionado = document.getElementById(selecionado);
    itemSelecionado.innerHTML += `<div class="selecionado" id="${selecionado}_check"><div class='check' "><ion-icon name='checkmark-circle'></ion-icon></div></div>`

    habilitarPedido();
}
function habilitarPedido(){
    if(comidaSelecionada !== "" && bebidaSelecionada !== "" && sobremesaSelecionada !== ""){
        botao.disabled = false;
        botao.classList.remove("cinza");
        botao.classList.add("verde");
        botao.innerHTML = "Fechar Pedido";
    }
}
function fecharPedido(){
    tela1 = document.getElementById("tela-informacoes");
    pedido = document.getElementById("info-pedido");
    salvarProdutos();

    tela1.classList.remove("invisivel");
    pedido.innerHTML =`
                    <div class="flex space">
                        <p>${comidaNome}</p>
                        <p>${comidaPreco}</p>
                    </div>
                    <div class="flex space">
                        <p>${bebidaNome}</p>
                        <p>${bebidaPreco}</p>
                    </div>
                    <div class="flex space">
                        <p>${sobremesaNome}</p>
                        <p>${sobremesaPreco}</p>
                    </div>
                    <div class="total flex space">
                        <span>${"TOTAL"}</span>
                        <span>R$${total}</span>
                    </div>
    `
}
function salvarProdutos (){
    comidaNome = document.getElementById(`nome_${comidaSelecionada}`).innerText;
    comidaPreco = document.getElementById(`preco_${comidaSelecionada}`).innerText;
    bebidaNome = document.getElementById(`nome_${bebidaSelecionada}`).innerText;
    bebidaPreco= document.getElementById(`preco_${bebidaSelecionada}`).innerText;
    sobremesaNome = document.getElementById(`nome_${sobremesaSelecionada}`).innerText;
    sobremesaPreco = document.getElementById(`preco_${sobremesaSelecionada}`).innerText;
    total = ((parseFloat(comidaPreco.replace(",", ".")) + parseFloat(bebidaPreco.replace(",", ".")) + parseFloat(sobremesaPreco.replace(",", "."))).toFixed(2)).replace(".", ",");;
}
function sairPedido(){
    tela1.classList.add("invisivel");
    tela2.classList.add("invisivel");
    tela3.classList.add("invisivel");
}
function continuarPedido(){
    nomeCliente = document.getElementById("nomeCliente").value;
    enderecoCliente = document.getElementById("enderecoCliente").value;

    tela1.classList.add("invisivel");
    tela2.classList.remove("invisivel");
}
function confirmarPedido(){
    let mensagem = `Olá, gostaria de fazer o *pedido*:
    - *Prato*: ${comidaNome}
    - *Bebida*: ${bebidaNome}
    - *Sobremesa*: ${sobremesaNome}
    *Total*: R$ *${total}*

    *Nome*: ${nomeCliente}
    *Endereço*: ${enderecoCliente}
    `
    let mensagemPronta = encodeURIComponent(mensagem);
    
    window.open(`https://wa.me/5531971272940?text=${mensagemPronta}`)

    concluirPedido();
}
function concluirPedido(){
    tela2.classList.add("invisivel");
    tela3.classList.remove("invisivel");

    desmarcarSelecionado(comidaSelecionada);
    desmarcarSelecionado(bebidaSelecionada);
    desmarcarSelecionado(sobremesaSelecionada);
    comidaSelecionada = "";
    bebidaSelecionada = "";
    sobremesaSelecionada = "";

    botao.disabled = true;
    botao.classList.add("cinza");
    botao.classList.remove("verde");
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
}

