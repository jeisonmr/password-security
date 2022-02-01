// ::::: CONTRASEÑA ::::::

// :::: Caracteres Debil, Medio, Segura, Muy Segura ::::

//  --- Caracteres, Nivel : Debil, Longitud : < 8.
const cararacteresDebil = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carDebil = " ";
  for (let i = 0; i < value; i++) {
    carDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carDebil;
};
// cararacteresDebil(5);

//  --- Caracteres, Nivel : Medio, Longitud : < 15.
const caracteresMedio = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMedio = " ";
  for (let i = 0; i < value; i++) {
    carMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carMedio;
};
// caracteresMedio(10);

//  --- Caracteres, Nivel : Segura, Longitud : < 23.
const caracteresSegura = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carSegura = " ";
  for (let i = 0; i < value; i++) {
    carSegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carSegura;
};
// caracteresSegura(18);

//  --- Caracteres, Nivel : Muy Segura, Longitud : < 23.
const caracteresMuySegura = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMuySegura = " ";
  for (let i = 0; i < value; i++) {
    carMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carMuySegura;
};
// caracteresMuySegura(25);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinCaracteres = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let pinCaract = " ";
  for (let i = 0; i < value; i++) {
    pinCaract += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  // console.log(`Pin : ${pinCaracteres}`);
  return pinCaract;
};
// pinCaracteres(4);

export {
  pinCaracteres,
  cararacteresDebil,
  caracteresMedio,
  caracteresSegura,
  caracteresMuySegura,
};
