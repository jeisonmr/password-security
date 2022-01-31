// ::::: CONTRASEÑA ::::::

// :::: Caracteres Debil, Medio, Segura, Muy Segura ::::

//  --- Caracteres, Nivel : Debil, Longitud : < 8.
const cararacteresDebil = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carDebil = " ";
  for (let i = 0; i < value; i++) {
    carDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Caracteres : Debil : ${carDebil}`);
  // return result1;
};
cararacteresDebil(5);

//  --- Caracteres, Nivel : Medio, Longitud : < 15.
const caracteresMedio = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMedio = " ";
  for (let i = 0; i < value; i++) {
    carMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Caracteres : Medio : ${carMedio}`);
  // return result1;
};
caracteresMedio(10);

//  --- Caracteres, Nivel : Segura, Longitud : < 23.
const caracteresSegura = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carSegura = " ";
  for (let i = 0; i < value; i++) {
    carSegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Caracteres : Segura : ${carSegura}`);
  // return result1;
};
caracteresSegura(18);

//  --- Caracteres, Nivel : Muy Segura, Longitud : < 23.
const caracteresMuySegura = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMuySegura = " ";
  for (let i = 0; i < value; i++) {
    carMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Caracteres : Muy Segura : ${carMuySegura}`);
  // return result1;
};
caracteresMuySegura(25);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinCaracteres = (value) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let pinCaracteres = " ";
  for (let i = 0; i < value; i++) {
    pinCaracteres += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Pin : ${pinCaracteres}`);
  // return result1;
};
pinCaracteres(4);