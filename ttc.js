#!/usr/bin/node

function ttc(ht, tva = 0.2) {
  return ht * (1 + tva);
}

// console.log(ttc(10,0.05))

//partie 2

function ttc2(ht, tva = 0.2) {
  ht = parseFloat(ht);
  tva = parseFloat(tva);
  if (isNaN(ht) || isNaN(tva)) {
    return "erreur de type";
  } else {
    return Math.round(ht * (1 + tva) * 100) / 100;
  }
}

// console.log(ttc2(10,"0.0545"));

const pricesHT = [100, 200, 55];

function sumTTC(ht1, ht2, ht3, tva = 0.2) {
  ht1 = parseFloat(ht1);
  ht2 = parseFloat(ht2);
  ht3 = parseFloat(ht3);
  tva = parseFloat(tva);
  if (isNaN(ht1) || isNaN(ht2) || isNaN(ht3) || isNaN(tva)) {
    return "erreur de type";
  } else {
    return Math.round((ht1 + ht2 + ht3) * (1 + tva) * 100) / 100;
  }
}

const badPrices = ["bjour", 100, 27];

console.log(sumTTC(...pricesHT, 0.3));
console.log(sumTTC(...badPrices));
