import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarProdPromo.js";

async function buscarProduto(evento) {
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo__produto, elemento.imagem, elemento.valor_original, elemento.valor__desconto, elemento.valor__atual)))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));