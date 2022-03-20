const nome = "Robson Pires"; //NÃO pode ser alterado o valor da variavel
let nome2 = "";  // pode ser alterado o valor da variavel

let pessoaDefault = {
    nome: "Robson de Souza",
    idade: "49",
    trabalho: "Programador"
}

let nomes = ["Robson Pires", "Maria da Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Robson de Souza",
        idade: "49",
        trabalho: "Programador"
    },
    {
        nome: "Maria da Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];

console.log("Vai aparecer o valor da variavel:");
console.log(nome2);

function alterarNome() {
    nome2 = "Robson alterado pela função";
    console.log("alteraFuncao:");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Função com parametro:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("------- IMPRIMIR AS PESSOAS --------")
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Trabalho:");
        console.log(item.trabalho);
        })
}

//console.log(pessoas);
imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

//console.log(pessoas);
imprimirPessoas();

//alterarNome();
//recebeEAlteraNome("ROBSON recebe e altera.");
