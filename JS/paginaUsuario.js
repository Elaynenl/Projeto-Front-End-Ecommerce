document.addEventListener('DOMContentLoaded', () => {
    const mensagemBoasVindas = document.getElementById('mensagemBoasVindas');
    const usuarioLogadoString = localStorage.getItem('usuarioLogado');

    if (usuarioLogadoString) {
        try {
            const usuarioLogado = JSON.parse(usuarioLogadoString);

            let saudacao = "Bem-vindo";
            if (usuarioLogado.gender === "feminino") {
                saudacao = "Bem-vinda";
            } else if (usuarioLogado.gender === "outros" || usuarioLogado.gender === "prefiro não dizer") {
                saudacao = "Bem-vindo(a)";
            }
            mensagemBoasVindas.textContent = `${saudacao}, ${usuarioLogado.firstname}`;
        } catch (error) {
            console.error('Erro ao fazer parse do JSON do usuário logado:', error);
        }
    } else {
        console.error('Usuário não encontrado no localStorage.');
    }
});
