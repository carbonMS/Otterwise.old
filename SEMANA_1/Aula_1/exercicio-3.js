//Se a ação cair do preço atual comprar, se subir do preço atual vender, se o preço ficar estável não fazer nada

let stockPrice = 1000;
let valorization = -200;
let finalPrice = stockPrice + valorization;

console.log("Preço Final: " + finalPrice);

if (finalPrice > stockPrice) {
  console.log("Vender");
} else if (finalPrice < stockPrice) {
  console.log("Comprar");
} else if (finalPrice === stockPrice) {
  console.log("Manter");
}
