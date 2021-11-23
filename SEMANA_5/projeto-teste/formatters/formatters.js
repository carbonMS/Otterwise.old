// Crie um arquivo formatters.js:
// 1. Nesse arquivo crie uma função chamada formatDate que recebe uma data como parâmetro e,
// utilizando a date-fns, retorna essa data no formato “DD/MM/YYYY”.
// 2. Esse arquivo deve exportar a função formatDate.

import { format } from 'date-fns'

export const formatDate = (date) => {
  return format(date, 'dd/MM/yyyy')
}
