// ::::: CONTRASEÑA ::::::

// :::: MAYUSCULAS Debil, Medio, Segura, Muy Segura ::::

//  --- Mayusculas, Nivel : Debil, Longitud : < 8.
const mayusculasDebil = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayDebil = " ";
  for (let i = 0; i < value; i++) {
    mayDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Debil : ${mayDebil}`);
  // return result1;
};
mayusculasDebil(8);
// console.log(generateRandomString(5));

//  --- Mayusculas, Nivel : Medio, Longitud : < 15.
const mayusculasMedio = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayMedio = " ";
  for (let i = 0; i < value; i++) {
    mayMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Medio : ${mayMedio}`);
  // return result1;
};
mayusculasMedio(15);

//  --- Mayusculas, Nivel : Segura, Longitud : < 23.
const mayusculasSegura = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let maySegura = " ";
  for (let i = 0; i < value; i++) {
    maySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Segura : ${maySegura}`);
  // return result1;
};
mayusculasSegura(23);

//  --- Mayusculas, Nivel : Muy Segura, Longitud : < 23.
const mayusculasMuySegura = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pinMayusculas = " ";
  for (let i = 0; i < value; i++) {
    pinMayusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Muy Segura : ${pinMayusculas}`);
  // return result1;
};
mayusculasMuySegura(35);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinMayusculas = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pinMayusculas = " ";
  for (let i = 0; i < value; i++) {
    pinMayusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Pin : ${pinMayusculas}`);
  // return result1;
};
pinMayusculas(4);
