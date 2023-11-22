let valor  // Não inicializada
console.log(valor);

valor = null;
console.log(valor);
// console.log(valor.toString()); Erro!!!!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evite atribuir Undefined
console.log(!!produto.preco);
// delete produto.preco;  Forma correta de deletar atributos
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);