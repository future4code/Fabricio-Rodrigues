/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

/* EXERCÍCIO 1 
A função recebe um número como argumento e outro número por prompt que fica guardado na variável 'cotacao'.
O número que entra como argumento é então multiplicado pelo número guardado na variável cotacao, e esse resultado é retornado.
No final, a variável 'meuDinheiro' invoca a função com o argumento 100, logo este número será multiplicado
pelo número guardado na variável 'cotacao'.
*/

/* EXERCÍCIO 2 
A função tem 2 parâmetros, sendo eles o 'tipoDeInvestimento' e o 'valor'. Após inseridos, uma variável de nome 'valorAposInvestimento' é 
criada, e um switch case é iniciado, tendo o tipoDeInvestimento como parâmetro. De acordo com o argumento digitado pelo usuário no 
parâmetro tipoDeInvestimento, o switch irá multiplicar o valor pelo número correspondente ao tipo de investimento, sendo eles poupança, 
renda fixa, CDB e ações.
Caso o usuário digite quaisquer palavras que não condizem com nenhum dos investimentos, a mensagem 
"TIPO DE INVESTIMENTO INFORMADO INCORRETO!" é printada na tela através de um Alert.
Após a função, 2 variáveis são criadas invocando a função com 2 argumentos. A variável 'novoMontante' retornaria os valores, já que um dos 
argumentos é "Ações", que existe na função, e o outro é o valor em tipo Number, também existente na função.
Porém a variável 'segundoMontante' resultaria no default do Switch Case, já que a mesma coloca "Tesouro Direto" como argumento, e esta
string é inexistente no código.

Ao final, as duas variáveis são printadas no console.
*/

/* EXERCÍCIO 3 
3 arrays são declarados, sendo o array 'numeros' com valores, e os 'array1' e 'array2' vazios. Após os arrays, um laço for of é criado,
com a intenção de pegar cada valor deste primeiro array e executar uma condicional: Se o número for par, ele deve entrar no array1. Se
for ímpar, ele deve entrar no array2.

Ao final, há um 3 console.logs, que vão printar no console o tamanho dos 3 arrays, em ordem: numeros, array1 e array2.
*/

/* EXERCÍCIO 4 
1 array e 2 variáveis são declaradas, sendo o array 'numeros' com valores, a variável 'numero1' com os dizeres 'Infinity' e a variável
'numero2' com valor 0. Um laço for of é criado, com a intenção de pegar cada valor do array 'numeros' e executar a seguinte condicional: Se
o elemento do array 'numeros' for menor do que o valor na variável 'numero1', numero1 então recebe o elemento do array. Logo após, outra condição
é declarada: Se o elemento do array for maior do que o valor na variável 'numero2', numero2 então recebe o elemento.

Ao final da execução, a variável numero1 receberá o menor número do array e a variável número2, o maior. 
As duas variáveis serão printadas usando console.log
*/

/* EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO */

/* EXERCÍCIO 1
1. 
A) For, for of, for each
B)  let array = [1, 2, 3, 4, 5, 8, 96, -1];
    let newArray = [];

    for(let item of array){
        if(item % 2 === 0){
            newArray.push(item);
        }
    } 

    console.log(newArray);

/* EXERCÍCIO 2
2. 
A) False
B) False
C) True
D) True
E) True

/* EXERCÍCIO 3
3. 
const quantidadeDeNumerosPares = 5;
let i = 0

while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

O código não havia um inicializador para a variável quantidadeDeNumerosPares, parava apenas quando i fosse
menor ou igual a quantidadeDeNumerosPares (sendo que ele precisava ser menor, apenas) e não havia um
incremento para a variável 'i'.

/* EXERCÍCIO 4

function triangleType(a, b, c) {

    if (a === b && b === c) {
        return "Este é um triângulo equilátero.";
    } else if (a === b || a === c || b === c) {
        return "Este é um triângulo isósceles.";
    } else {
        return "Este é um triângulo escaleno.";
    }

}

console.log(triangleType(1, 2, 3));
console.log(triangleType(2, 2, 3));
console.log(triangleType(2, 2, 2));

/* EXERCÍCIO 5

function twoNumbers (x, y) {
let diferenca = x - y;
    
    
    if (x > y) {
        if (x % y === 0) {
            return `O maior é ${x}.\n ${x} é divísivel por ${y}.\n A diferença entre eles é ${diferenca}.`;
        } else {
            return `O maior é ${x}.\n ${x} não é divísivel por ${y}.\n A diferença entre eles é ${diferenca}.`;
        }
    } else if (y > x) { 
        if (y % x === 0) {
            diferenca = y - x;
            return `O maior é ${y}.\n ${y} é divísivel por ${x}.\n A diferença entre eles é ${diferenca}.`;
        } else {
            return `O maior é ${y}.\n ${y} não é divísivel por ${x}.\n A diferença entre eles é ${diferenca}.`;
        }
    } else if (x === y) {
        return `${x} é igual a ${y}.\n ${x} é divisível por ${y}.\n A diferença entre eles é ${diferenca}.`;
    }

}

/* EXERCÍCIOS DE FUNÇÕES */

/* EXERCÍCIO 1

    const array = [0, 2, 4, 8, 16, 32, 64, -256, 128, 256, 512, 1024, 2048, 9999];
    let highestNumber = [];
    let lowestNumber = [];

    function arrayTreatment(array) {
        for(number of array) {
            if (number > highestNumber.length) {
            highestNumber.push(number);
            } else if (number < highestNumber.length) {
            lowestNumber.push(number);
            }
        }
    
        x = highestNumber.length - 1;
        console.log(highestNumber[x]);

        y = lowestNumber.length - 1;
        console.log(lowestNumber[y]);

    } 

    console.log(arrayTreatment(array));

/* EXERCÍCIO 2

    const hello = function() {
        alert("Hello Future4");
    }

    hello();
*/

/* EXERCÍCIOS DE OBJETOS */

/* EXERCÍCIO 1 

Os objetos são coleções de propriedades, que por sua vez mantém valores. As vezes estas propriedades
podem manter funções, o que as tornarão métodos do objeto. Objetos em programação são úteis pois tentam 
retratar objetos da vida real, de forma que o programa consiga manipular sua utilidade no código.
Da mesma forma que funções evitam repetição de código, objetos também o fazem, deixando possível a 
referenciação posteriormente no código, fazendo com que o mesmo seja mais limpo e com a mesma eficiência.

Arrays são coletâneas de dados, basicamente uma variável com vários valores dentro. São úteis para
guardar múltiplos valores que serão acessados depois no runtime. Devem ser utilizados quando precisamos
segurar um ou mais valores, mesmo que seja incerto se vamos precisar de mais do que um valor.
*/

/* EXERCÍCIO 2

function criaRetangulo(lado1, lado2) {
    const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2,
    };

    return retangulo;
}
*/

/* EXERCÍCIO 3 

const filme = {
    titulo: "Scarface",
    ano: 1983,
    diretor: "Brian De Palma",
    atores: ["Al Pacino", " Michelle Pfeiffer", " Steven Bauer", " e Mark Margolis"],
}

alert(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}!`);
*/

/* EXERCÍCIO 4 

const pessoa = {
    nome: "Jéssica",
    idade: 34,
    email: 'jessica@outlook.com',
    endereco: "Av Duque de Caxias, Nº111."
}

function anonimizarPessoa (pessoa) {

    novaPessoa = {
        nome: "ANÔNIMO",
        idade: pessoa.idade,
        email: pessoa.email,
        endereco: pessoa.endereco,
    }

    return novaPessoa;
}
*/

/* EXERCÍCIOS DE FUNÇÕES DE ARRAY */

/* EXERCÍCIO 1

let pessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

const apenasAdultos = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20;
})

const apenasCriancas = pessoas.filter((pessoa) => {
    return pessoa.idade < 18;
})
*/

/* EXERCÍCIO 2

const arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
let newArr2 = [];
let newArr3 = [];

function arrayTimesTwo() {
    for(let item of arr) {
        newArr.push(item * 2);
    }

    return newArr;
}

function arrayTimesThree() {
  for (let item of arr) {
    newArr2.push(item * 3);
  }

  return newArr2;
}

function arrayIsPair() {
  for (item of arr) {
    if (item % 2 === 0) {
        newArr3.push(`${item} é par.`);
    } else {
        newArr3.push(`${item} é ímpar.`)
    }
  }

  return newArr3;
}

*/


/* EXERCÍCIO 3

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

let pessoasPermitidas = [];
let pessoasBarradas = [];

function temPermissao() {

    pessoas.forEach((pessoa) => {
        if(pessoa.altura > 1.5 && pessoa.idade >= 14 && pessoa.idade < 60) {
            pessoasPermitidas.push(pessoa);
        } else {
            pessoasBarradas.push(pessoa);
        }
    })

    console.log("As pessoas permitidas são:");
    for(pessoa of pessoasPermitidas) {
        console.log(pessoa)
    }

    console.log("As pessoas barradas são:");
        for(pessoa of pessoasBarradas) {
        console.log(pessoa)
    }
}

temPermissao();
*/

/* EXERCÍCIO 4 

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function enviaEmail() {
    consultas.forEach((consulta) => {
        if(consulta.cancelada == false && consulta.genero === "masculino") {
            console.log(`Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
        } else if (consulta.cancelada == false && consulta.genero === "feminino") {
            console.log(`Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
        } else if (consulta.cancelada == true && consulta.genero === "masculino") {
            console.log(`Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        } else if (consulta.cancelada == true && consulta.genero === "feminino") {
            console.log(`Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        }
    })
}
*/

/* EXERCÍCIO 5 */
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
];

contas.forEach((conta, index) => {
    for (compra in conta.compras) {
        let sum = 0;
        let i = conta.compras.length;
        while (i--) sum += conta.compras[i];
        console.log(sum)
        conta.saldoTotal -= sum;
        break;
        }
    })

