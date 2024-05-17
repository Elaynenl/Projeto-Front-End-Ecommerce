const formCadastrarEmail = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');

const emailsCadastrados = JSON.parse(localStorage.getItem('emails')) || [];

formCadastrarEmail.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const emailValue = emailInput.value.trim()
    
    if (emailValue) {
        alert('E-mail cadastrado com sucesso!')
        
        const email = {
            email: emailValue
        }
        emailsCadastrados.push(email)
        
        localStorage.setItem('emails', JSON.stringify(emailsCadastrados))
        
        emailInput.value = '';
    } else {
        alert('Por favor, insira um e-mail válido.')
    }

});

