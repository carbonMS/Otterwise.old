// Crie um projeto novo e instale a biblioteca node-fetch.
// 1. Consuma a lista de posts através do endpoint https://jsonplaceholder.typicode.com/posts.
// 2. Agora que você tem a lista de posts, consulte o primeiro post da lista.
// 3. Cadastre um novo post enviando um objeto com os atributos title e body para o endpoint https://jsonplaceholder.typicode.com/posts.
// 4. Faça a edição de um post enviando novos atributos title e body para o post com id 1.
// 5. Faça a exclusão do primeiro post vindo da listagem de posts.

// ---------------PUXAR TODOS POSTS----------------

import fetch from 'node-fetch'

const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'GET',
})
const data = await response.json()

console.log(data)

//**************************************** */
// -----------------PUXAR PRIMEIRO POST-----------------

const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'GET',
})
const data1 = await response1.json()

console.log(data1[0])

//******************************************** */
//----------------CADASTRAR NOVO POST-----------------

const body = { title: 'Teste', body: 'Testado' }
const response2 = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})
const data2 = await response2.json()

console.log(data2)
//**************************************** */
//--------------------EDITAR POST-------------------------

const body1 = { title: 'Atualizando', body: 'Atualizado' }
const response3 = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify(body1),
  headers: { 'Content-Type': 'application/json' },
})
const data3 = await response3.json()

console.log(data3)

//************************************************* */

//-------------------EXCLUIR POST---------------------

const response4 = await fetch(
  'https://jsonplaceholder.typicode.com/posts/' + data[0].id,
  {
    method: 'DELETE',
    body: JSON.stringify(body1),
    headers: { 'Content-Type': 'application/json' },
  }
)
const data4 = await response4.json()

console.log(data4)
