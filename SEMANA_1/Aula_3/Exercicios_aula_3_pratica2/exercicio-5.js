// 05 - Um banco vai liberar linhas de crédito só para servidores públicos. Caso o(a)
// servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de
// juros menor. Crie um algoritmo que possui três valores de entradas: nome
// completo (string), servidor (boolean), professor (boolean) e que imprime uma
// mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha
// de crédito.
let server = false;
let isProfessor = true;

function showCreditline(fullName) {
  if (isProfessor) return fullName + ", taxa de juros menor.";
  if (server) return fullName + ", taxa de juros padrão.";
}

console.log(showCreditline("Servidor Público"));
