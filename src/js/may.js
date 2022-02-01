// ::::: CONTRASEÑA ::::::

// :::: MAYUSCULAS Debil, Medio, Segura, Muy Segura ::::

//  --- Mayusculas, Nivel : Debil, Longitud : < 8.
const mayusculasDebil = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayDebil = " ";
  for (let i = 0; i < value; i++) {
    mayDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return mayDebil;
};
// mayusculasDebil(8);

//  --- Mayusculas, Nivel : Medio, Longitud : < 15.
const mayusculasMedio = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayMedio = " ";
  for (let i = 0; i < value; i++) {
    mayMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return mayMedio;
};
// mayusculasMedio(15);

//  --- Mayusculas, Nivel : Segura, Longitud : < 23.
const mayusculasSegura = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let maySegura = " ";
  for (let i = 0; i < value; i++) {
    maySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return maySegura;
};
// mayusculasSegura(23);

//  --- Mayusculas, Nivel : Muy Segura, Longitud : < 23.
const mayusculasMuySegura = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayMuySegura = " ";
  for (let i = 0; i < value; i++) {
    mayMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return mayMuySegura;
};
// mayusculasMuySegura(35);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinMayusculas = (value) => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pinMayusculas = " ";
  for (let i = 0; i < value; i++) {
    pinMayusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return pinMayusculas;
};
// pinMayusculas(4);

export {
  pinMayusculas,
  mayusculasDebil,
  mayusculasMedio,
  mayusculasSegura,
  mayusculasMuySegura,
};
