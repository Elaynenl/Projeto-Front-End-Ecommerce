export default function ehUmEmail(campo) {
    
    // trim() remove os espaços em branco (caso sejam inseridos espaços) antes e depois da string.
    const email = campo.value.trim(); 

        // Verifica se há espaços em branco antes ou depois do @
        if (email.includes(" ")) {
            console.log("O email não pode conter espaços em branco.");
            return false;
        }
    
        // Verifica se o email tem o formato válido
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            console.log("Email válido:", email);
            return true;
        } else {
            console.log("Email inválido:", email);
            return false;
        }
    }