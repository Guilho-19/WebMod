const nome = "Rebeca";
const Concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
console.log(Concatenacao, template);

// Expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);