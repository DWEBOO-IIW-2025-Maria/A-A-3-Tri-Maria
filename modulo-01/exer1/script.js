const nome = "Maria Clara Dias Lopes";
const cidade = "Assis Chateaubriand";
const anoNascimento = 2010; 
const anoAtual = 2026;

const idade = anoAtual - anoNascimento;
const mensagem = `Olá! Meu nome é ${nome}, nasci na cidade de ${cidade} e hoje tenho ${idade} anos.`;
console.log(mensagem);

document.body.innerHTML += `<p>${mensagem}</p>`;
