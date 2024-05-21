async function listaProdutos() {
    const conexao = await fetch ("http://localhost:3000/promocoes")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos
}