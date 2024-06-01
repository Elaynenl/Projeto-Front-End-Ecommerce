document.addEventListener('DOMContentLoaded', () => {
    const mensagemBoasVindas = document.getElementById('mensagemBoasVindas');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        let saudacao = "Bem-vindo";
        if (usuarioLogado.gender === "feminino") {
            saudacao = "Bem-vinda";
        } else if (usuarioLogado.gender === "outros" || usuarioLogado.gender === "nenhum") {
            saudacao = "Bem-vindo(a)";
        }
        mensagemBoasVindas.textContent = `${saudacao}, ${usuarioLogado.firstname}`;
    }
});