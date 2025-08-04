let idade = prompt('Digite sua idade: ');
let verificacao = prompt('Digite seu status: ').toLowerCase();

let maioridade = idade >= 18 ? 'maior de idade' : 'menor de idade';
console.log(`Voce é ${maioridade}.`);

switch (status) {
    case 'registrado':
        console.log("Bem-vindo ao sistema!");
        break;
    case 'não registrado':
        console.log("Por favor, complete seu registrado.")
        break;
    default:
        console.log("Status desconhecido.");
}

if (idade >= 18 && status === "registrado"){
    console.log("V Acesso completo concedido.");
} else {
    console.log("X Acesso limitado");
}
