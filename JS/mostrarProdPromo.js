import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector(".produtos__promo");

export default function constroiCard(titulo__produto, imagem, valor_original, valor__desconto, valor__atual) {
    const produtoEmPromo = document.createElement("li");
    produtoEmPromo.className = "container__produto-promo";
    produtoEmPromo.innerHTML = `
        <a href="" class="container__destaque__link">
            <img src="${imagem}" alt="imagem de um frasco de perfume masculino" class="container__destaque__imagem">
        </a>
        <h3 class="titulo__produto titulo__produto__promo">${titulo__produto}</h3>
        <p class="valor"> <s>R$ ${valor_original}</s></p>
        <p class="valor__desconto">${valor__desconto} % </p>
        <p class="valor__atual valor__desconto__aplicado">R$ ${valor__atual}</p>
        <a href="" class="botao__comprar-produto">COMPRAR</a>
    `;
    return produtoEmPromo;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(
                elemento.titulo__produto,
                elemento.imagem,
                elemento.valor_original,
                elemento.valor__desconto,
                elemento.valor__atual
            )
        ));
    } catch {
        lista.innerHTML = `<h2 class="mensagem_titulo">Não foi possível carregar a lista de produtos em promoção!</h2>`;
    }
}

listaProdutos();