document.addEventListener('DOMContentLoaded', () => {
    const botaoListar = document.querySelector('#botaolistar button');
    const listaElement = document.getElementById('listaUsuarios');

    // Verifica a role do usuário ao carregar a página
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado && usuarioLogado.role === 'admin') {
        // Se o usuário for admin, mostra o botão
        if (botaoListar) {
            botaoListar.style.display = 'block';
            
            botaoListar.addEventListener('click', async (evento) => {
                evento.preventDefault(); 
                await listarUsuarios(); 
            });
        } else {
            console.error('Elemento com ID "botaolistar" não encontrado.');
        }
    } else {
        // Se não for admin, oculta o botão
        if (botaoListar) {
            botaoListar.style.display = 'none';
        }
    }

    const listarUsuarios = async () => {
        try {
            // Faz a requisição GET para buscar usuários
            const resposta = await fetch("https://projeto-desenvolve.vercel.app/usuarios", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
                        
            if (!resposta.ok) {
                throw new Error('Falha ao buscar usuários');
            }

            const usuarios = await resposta.json();

            // Exibe a lista de usuários na tela
            if (listaElement) {
                listaElement.innerHTML = ''; // Limpa a lista existente

                // Cria um elemento para exibir os usuários em formato JSON
                const jsonOutput = document.createElement('pre');
                jsonOutput.textContent = JSON.stringify(usuarios, null, 2);
                listaElement.appendChild(jsonOutput);
            } else {
                console.error('Elemento de lista de usuários não encontrado.');
            }

        } catch (erro) {
            console.error("Erro ao conectar com a API:", erro);
            alert('Erro ao conectar com a API: ' + erro.message);
        }
    };
});