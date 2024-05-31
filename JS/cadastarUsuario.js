const formCadastrarUsuario = document.getElementById('formulario__cadastro__usuario');
const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

formCadastrarUsuario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const number = document.getElementById('number').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('Confirmpassword').value.trim();
        const gender = document.querySelector('input[name="genero"]:checked').id;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        if (firstname && lastname && email && number && password && confirmPassword && gender) {
            alert('Cadastro realizado com sucesso!');

            const usuario = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                number: number,
                password: password,
                gender: gender
            };

            usuariosCadastrados.push(usuario);

            localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

            // Reseta o formulário
            formCadastrarUsuario.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });










// const formCadastroUsuario = document.getElementById('formulario__cadastro__usuario').value.trim();
// let  nomeUsuario = document.getElementById('firstname').value.trim();
// let  sobrenomeUsuario = document.getElementById('firstname').value.trim();
// let  emailUsuario = document.getElementById('firstname').value.trim();
// let  telefoneUsuario = document.getElementById('firstname').value.trim();
// let  passwordUsuario = document.getElementById('firstname').value.trim();
// let  confirmarSenhaUsuario = document.getElementById('firstname').value.trim();
// let generoUsuário = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').id : '';


// const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// formCadastroUsuario.addEventListener('submit', (evento) => {
//     evento.preventDefault();

//     let nomeValue = nomeUsuario.Value;
//     let sobrenomeValue = sobrenomeUsuario.value
//     let emailUsuarioValue = emailUsuario;

//     if(nomeValue && sobrenomeValue && emailUsuarioValue) {
//         alert("Cadastrado com Sucesso")
    

//     let usuario = {
//         nome: nomeValue,
//         sobrenome: sobrenomeValue,
//         emailUsuario: emailUsuarioValue
//     }

//     usuariosCadastrados.push(usuario)

//     localStorage.setItem('usuarios,', JSON.stringify(usuariosCadastrados))

//     nomeUsuario.value = '';
//     sobrenomeUsuario = '';
//     emailUsuario = '';

//     } else {
//         alert('Por favor, insira dados válidos.')

        
//     }
// })