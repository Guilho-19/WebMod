const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));      // Retorna um valor nulo
console.log(escola.charCodeAt(3));  // Retorna o valor correspondente na tabela unicode
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));  // Concatenação
console.log(escola.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","));  // Array