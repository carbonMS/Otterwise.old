// 04 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
// seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
// dia e terminar em outro, tendo uma duração máxima de 24 horas.

let fullDay = 24;

function gameTime(startTime, endTime) {
  let fullGame = fullDay - startTime + endTime;
  if (startTime <= 24 && endTime <= 24 && fullGame <= 24)
    return fullGame + " horas totais.";
}

console.log(gameTime(12, 13));

//não consegui chegar numa solução pra dar certo caso a hora de inicio for menor que a hora de final
