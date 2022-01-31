// ::::: CONTRASEÑA ::::::

// :::: Minusculas Debil, Medio, Segura, Muy Segura ::::

//  --- Minusculas, Nivel : Debil, Longitud : < 8.
const minusculasDebil = (value) => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minDebil = " ";
  for (let i = 0; i < value; i++) {
    minDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Minusculas : Debil : ${minDebil}`);
  // return result1;
};
minusculasDebil(8);

//  --- Mayusculas, Nivel : Medio, Longitud : < 15.
const minusculasMedio = (value) => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minMedio = " ";
  for (let i = 0; i < value; i++) {
    minMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Medio : ${minMedio}`);
  // return result1;
};
minusculasMedio(15);

//  --- Mayusculas, Nivel : Segura, Longitud : < 23.
const minusculasSegura = (value) => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minSegura = " ";
  for (let i = 0; i < value; i++) {
    minSegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Segura : ${minSegura}`);
  // return result1;
};
minusculasSegura(23);

//  --- Mayusculas, Nivel : Muy Segura, Longitud : < 23.
const minusculasMuySegura = (value) => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minMuySegura = " ";
  for (let i = 0; i < value; i++) {
    minMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Muy Segura : ${minMuySegura}`);
  // return result1;
};
minusculasMuySegura(35);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinMinusculas = (value) => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let pinMinusculas = " ";
  for (let i = 0; i < value; i++) {
    pinMinusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(`Mayusculas : Pin : ${pinMinusculas}`);
  // return result1;
};
pinMinusculas(4);