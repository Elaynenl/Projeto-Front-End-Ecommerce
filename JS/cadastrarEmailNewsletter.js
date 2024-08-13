import { validaEmail } from './validaEmail.js';

const formCadastrarEmail = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const mensagemValidacao = document.getElementById('mensagemValidacao');

const emailsCadastrados = JSON.parse(localStorage.getItem('emails')) || [];

// Função para aplicar estilos de erro
const aplicarEstilosErro = () => {
    mensagemValidacao.textContent = 'E-mail inválido';
    mensagemValidacao.style.display = 'block';
    mensagemValidacao.style.color = 'red';
    emailInput.style.border = '1px solid red';
};

// Função para remover estilos de erro
const removerEstilosErro = () => {
    mensagemValidacao.style.display = 'none';
    emailInput.style.border = '';
};

// Evento de submit do formulário
formCadastrarEmail.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const emailValue = emailInput.value.trim();
    
    if (emailValue && validaEmail(emailValue)) {
        alert('E-mail cadastrado com sucesso!');
        
        const email = {
            email: emailValue
        };
        emailsCadastrados.push(email);
        
        localStorage.setItem('emails', JSON.stringify(emailsCadastrados));
        
        emailInput.value = '';
        removerEstilosErro(); // Resetar estilos após o cadastro
    } else {
        aplicarEstilosErro(); // Aplicar estilos de erro se o e-mail for inválido
    }
});

// Evento de input no campo de e-mail
emailInput.addEventListener('input', () => {
    // Remover estilos de erro enquanto o usuário digita
    removerEstilosErro();
});

// Evento de blur (perda de foco) no campo de e-mail
emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value.trim();
    
    if (emailValue && !validaEmail(emailValue)) {
        aplicarEstilosErro(); // Aplicar estilos de erro se o e-mail for inválido ao perder o foco
    } else {
        removerEstilosErro(); // Remover estilos se o e-mail for válido ao perder o foco
    }
});
