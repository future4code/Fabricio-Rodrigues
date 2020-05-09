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