async function listaProdutos() {
    try {
        const conexao = await fetch("https://projeto-desenvolve.vercel.app/api/produtosEmPromocao");
        if (!conexao.ok) {
            throw new Error('Ocorreu um erro inesperado na resposta da Rede');
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error("Falha ao buscar os resultados da pesquisa:", error);
    }
}

async function buscaProduto(termoDeBusca) {
    try {
        const conexao = await fetch(`https://projeto-desenvolve.vercel.app/api/produtosEmPromocao/busca?q=${termoDeBusca}`);
        if (!conexao.ok) {
            throw new Error('Ocorreu um erro inesperado na resposta da Rede');
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error("Falha ao buscar os resultados da pesquisa:", error);
    }
}

export const conectaApi = {
    listaProdutos,
    buscaProduto
};
