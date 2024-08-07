
document.addEventListener('DOMContentLoaded', () => {
    const formLoginUsuario = document.getElementById('campos__form__login');

    if (formLoginUsuario) {
        formLoginUsuario.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            const email = document.getElementById('emailLogin').value.trim();
            const password = document.getElementById('passwordLogin').value.trim();

            if (email && password) {
                const usuario = {
                    email: email,
                    password: password
                };

                try {
                    const resposta = await fetch("https://projeto-desenvolve.vercel.app/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(usuario)
                    });

                    if (!resposta.ok) {
                        throw new Error('Falha ao fazer login');
                    }

                    const respostaJson = await resposta.json();

                    // Salva o usuário logado no localStorage
                    localStorage.setItem('usuarioLogado', JSON.stringify(respostaJson.usuario));

                    // Redireciona para a página de boas-vindas
                    window.location.href = '/meu-perfil';

                } catch (erro) {
                    console.error("Erro ao conectar com a API:", erro);
                    alert('Erro ao conectar com a API: ' + erro.message);
                }
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    } else {
        console.error('Elemento com ID "campos__form__login" não encontrado.');
    }
});




















//código de login q funcionou mas naõ pegou o usuário logado

// const formLoginUsuario = document.getElementById('campos__form__login');

// formLoginUsuario.addEventListener('submit', async (evento) => {
//     evento.preventDefault();

//     const email = document.getElementById('emailLogin').value.trim();
//     const password = document.getElementById('passwordLogin').value.trim();

//     if (email && password) {
//         const usuario = {
//             email: email,
//             password: password
//         };

//         try {
//             const resposta = await fetch("http://localhost:3000/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(usuario)
//             });

//             if (!resposta.ok) {
//                 throw new Error('Falha ao fazer login');
//             }

//             const respostaJson = await resposta.json();

//             // Salva o usuário logado no localStorage
//             localStorage.setItem('usuarioLogado', JSON.stringify(respostaJson.usuario));

//             // Redireciona para a página de boas-vindas
//             window.location.href = 'paginaUsuario.html';

//         } catch (erro) {
//             console.error("Erro ao conectar com a API:", erro);
//             alert('Erro ao conectar com a API: ' + erro.message);
//         }
//     } else {
//         alert('Por favor, preencha todos os campos.');
//     }
// });





//código de login antigo que salvava dados na localstorage


// const formCadastrarUsuario = document.getElementById('formulario__cadastro__usuario');
// const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// const formLoginUsuario = document.getElementById('campos__form__login');

// formCadastrarUsuario.addEventListener('submit', (evento) => {
//     evento.preventDefault();

//     const firstname = document.getElementById('firstname').value.trim();
//     const lastname = document.getElementById('lastname').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const number = document.getElementById('number').value.trim();
//     const password = document.getElementById('password').value.trim();
//     const confirmPassword = document.getElementById('Confirmpassword').value.trim();
//     const gender = document.querySelector('input[name="genero"]:checked').id;

//     if (password !== confirmPassword) {
//         alert('As senhas não coincidem!');
//         return;
//     }

//     if (firstname && lastname && email && number && password && confirmPassword && gender) {
//         alert('Cadastro realizado com sucesso!');

//         const usuario = {
//             firstname: firstname,
//             lastname: lastname,
//             email: email,
//             number: number,
//             password: password,
//             gender: gender
//         };

//         usuariosCadastrados.push(usuario);

//         localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

//         // Reseta o formulário
//         formCadastrarUsuario.reset();
//     } else {
//         alert('Por favor, preencha todos os campos.');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const savedEmail = localStorage.getItem('emailLogin');
//     const savedPassword = localStorage.getItem('passwordLogin');
//     if (savedEmail && savedPassword) {
//         document.getElementById('emailLogin').value = savedEmail;
//         document.getElementById('passwordLogin').value = savedPassword;
//         document.getElementById('lembrarDados').checked = true;
//     }
// });

// formLoginUsuario.addEventListener('submit', (evento) => {
//     evento.preventDefault();

//     const emailLogin = document.getElementById('emailLogin').value.trim();
//     const passwordLogin = document.getElementById('passwordLogin').value.trim();
//     const lembrarDados = document.getElementById('lembrarDados').checked;

//     const usuario = usuariosCadastrados.find(user => user.email === emailLogin && user.password === passwordLogin);

//     if (usuario) {
        
//         // Armazena o nome e o gênero do usuário no localStorage para usar na páginaUsuário (boas-vindas)
//         localStorage.setItem('usuarioLogado', JSON.stringify({firstname: usuario.firstname, gender: usuario.gender }));

//         // Salva os dados de login no localStorage se "Lembrar dados de acesso" estiver selecionado
//         if (lembrarDados) {
//             localStorage.setItem('emailLogin', emailLogin);
//             localStorage.setItem('passwordLogin', passwordLogin);
//         } else {
//             localStorage.removeItem('emailLogin');
//             localStorage.removeItem('passwordLogin');
//         }
//         // Redireciona para a página de boas-vindas
//         window.location.href = '../HTML/paginaUsuario.html';
//     } else {
//         alert('Email ou senha incorretos!');
//     }
// });