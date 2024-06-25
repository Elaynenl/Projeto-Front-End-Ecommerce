import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarProdPromo.js";

async function buscarProduto(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value.trim(); // Remove espaços em branco do início e fim
    if (!dadosDePesquisa) return; // Evita buscar vazia

    try {
        const busca = await conectaApi.buscaProduto(dadosDePesquisa);

        const lista = document.querySelector("[data-lista]");
        lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

        if (busca.length === 0) {
            lista.innerHTML = `<h2 class="mensagem__erro">Produto não encontrado</h2>`;
        } else {
            busca.forEach(elemento => {
                lista.appendChild(constroiCard(
                    elemento.titulo__produto,
                    elemento.imagem,
                    elemento.valor_original,
                    elemento.valor__desconto,
                    elemento.valor__atual
                ));
            });
        }

        // Limpa o input de pesquisa após o retorno da busca.
        document.querySelector("[data-pesquisa]").value = '';

        // Exibe o botão de retornar (caso exista)
        const botaoRetornar = document.querySelector("[data-botao-retornar]");
        if (botaoRetornar) {
            botaoRetornar.style.display = 'inline-block';
        }

    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        lista.innerHTML = `<h2 class="mensagem__erro">Falha ao buscar produtos</h2>`;
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", buscarProduto);

// Evento para buscar ao pressionar Enter

document.querySelector("[data-pesquisa]").addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        buscarProduto(evento);
    }
});
