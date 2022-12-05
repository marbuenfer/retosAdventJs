const gifts = ["cat", "game", "socks"];
function wrapping(gifts) {
  let envueltos = new Array();
  let papel;
  let simbolo;

  simbolo = "*";
  for (var i = 0; i < gifts.length; i++) {
    papel = simbolo.repeat(gifts[i].length + 2);
    envueltos.push(
      papel + "\\n" + simbolo + gifts[i] + simbolo + "\\n" + papel
    );
  }
  return envueltos;
}

const wrapped = wrapping(gifts);
console.log(wrapped);
