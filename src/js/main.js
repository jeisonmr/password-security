// ::::: CONTRASEÑA ::::::

// Tipo: Numerico, Nivel: Debil, Longitud : 2 < 3.
const numDebil = () => {
  let debil = new Uint8Array(1);
  window.crypto.getRandomValues(debil);
  console.log(`Numero : Debil :  ${debil}`);
};
numDebil();

// Tipo: Numerico, Nivel: Medio, Longitud : 4 < 5.
const numMedio = () => {
  let medio = new Uint16Array(1);
  window.crypto.getRandomValues(medio);
  console.log(`Numero : Medio :  ${medio}`);
};
numMedio();

// Tipo: Numerico, Nivel: Seguro, Longitud : 9 < 10.
const numSeguro = () => {
  let seguro = new Uint32Array(1);
  window.crypto.getRandomValues(seguro);
  console.log(`Numero : Seguro : ${seguro}`);
};
numSeguro();

// Tipo: Numerico, Nivel: Muy Seguro, Longitud : 18 < 20.
const numMuySeguro = () => {
  let seguro1 = new Uint32Array(1);
  let seguro2 = new Uint32Array(1);
  window.crypto.getRandomValues(seguro1);
  window.crypto.getRandomValues(seguro2);
  console.log(`Numero : Muy Seguro : ${seguro1 + seguro2}`);
};
numMuySeguro();

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pin = () => {
  let pin = new Uint8Array(1);
  window.crypto.getRandomValues(pin);

  if (pin.toString().length == 2) {
    let r = Math.floor(Math.random() * (99 - 10) + 10);
    console.log(`Numero : PIN :  ${pin + r}`);
  } else if (pin.toString().length == 3) {
    let r = Math.floor(Math.random() * (9 - 0) + 0);
    console.log(`Numero : PIN :  ${pin + r}`);
  }
};
pin();


