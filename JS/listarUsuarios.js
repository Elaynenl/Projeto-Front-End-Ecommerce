document.addEventListener('DOMContentLoaded', () => {
    const botaoListar = document.querySelector('#botaolistar button');
    const tabelaUsuarios = document.getElementById('tabelaUsuarios');
    const corpoTabela = document.getElementById('corpoTabela');
    
    // Verifica a role do usuário ao carregar a página
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado && usuarioLogado.role === 'admin') {
        // Se o usuário for admin, mostra o botão e a tabela
        if (botaoListar) {
            botaoListar.style.display = 'block';
            
            botaoListar.addEventListener('click', async (evento) => {
                evento.preventDefault(); 
                await listarUsuarios(); 
                if (tabelaUsuarios) {
                    tabelaUsuarios.style.display = 'table'; // Exibe a tabela
                }
            });
        } else {
            console.error('Elemento com ID "botaolistar" não encontrado.');
        }
    } else {
        // Se não for admin, oculta o botão e a tabela
        if (botaoListar) {
            botaoListar.style.display = 'none';
        }
        if (tabelaUsuarios) {
            tabelaUsuarios.style.display = 'none'; // Garante que a tabela permaneça oculta
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

            // Exibe os usuários na tabela
            if (corpoTabela) {
                corpoTabela.innerHTML = ''; // Limpa o corpo da tabela existente

                usuarios.forEach(usuario => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td data-label="Nome">${usuario.firstname}</td>
                    <td data-label="Sobrenome">${usuario.lastname}</td>
                    <td data-label="E-mail">${usuario.email}</td>
                    <td data-label="Contato">${usuario.number}</td>
                    <td data-label="Gênero">${usuario.gender}</td>
                    <td data-label="Tipo">${usuario.role}</td>
                    <td data-label="Data de Cadastro">${new Date(usuario.createdAt).toLocaleDateString()}</td>
                    <td data-label="Ações">
                        <button class="alterar" onclick="alterarUsuario('${usuario._id}')">Alterar</button>
                        <button class="deletar" onclick="deletarUsuario('${usuario._id}')">Deletar</button>
                    </td>
                `;
                    corpoTabela.appendChild(tr);
                });
            } else {
                console.error('Elemento de corpo da tabela não encontrado.');
            }

        } catch (erro) {
            console.error("Erro ao conectar com a API:", erro);
            alert('Erro ao conectar com a API: ' + erro.message);
        }
    };

    // window.alterarUsuario = (id) => {
    //     // Função para alterar o usuário
    //     console.log('Alterar usuário com ID:', id);
    //     // Implementar lógica para alterar o usuário
    // };

    // window.deletarUsuario = (id) => {
    //     // Função para deletar o usuário
    //     console.log('Deletar usuário com ID:', id);
    //     // Implementar lógica para deletar o usuário
    // };
});