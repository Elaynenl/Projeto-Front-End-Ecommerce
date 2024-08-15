const formCadastrarUsuario = document.getElementById('formulario__cadastro__usuario');

formCadastrarUsuario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('Confirmpassword').value.trim();
    const gender = document.querySelector('input[name="genero"]:checked').id;

        

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    if (firstname && lastname && email && number && password && confirmPassword && gender) {
        const usuario = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            number: number,
            password: password,
            gender: gender
        };

        //conexão com a api usando o fetch
        try {
            const resposta = await fetch("https://projeto-desenvolve.vercel.app/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });

            if (!resposta.ok) {
                throw new Error('Falha ao cadastrar o usuário');
            }

            const respostaJson = await resposta.json();

            alert('Cadastro realizado com sucesso!');

            // Reseta o formulário após confirmação de cadastro ok.
            formCadastrarUsuario.reset();

        } catch (erro) {
            console.error("Erro ao conectar com a API:", erro);
            alert('Erro ao conectar com a API: ' + erro.message);
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }

    console.log(email);
});





