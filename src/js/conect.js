import { pinCaracteres } from "./car.js";
import { numDebil, numMedio, numMuySeguro, numSeguro } from "./num.js";
// console.log(pinCaracteres(3));
// console.log(numMuySeguro());

let txt_password = document.querySelector(".txt-password");

let tipo_seguridad = document.querySelector(".tipo-seguridad");
let btn_generar = document.querySelector(".generador-pass");
let btn_copiar = document.querySelector(".copiar-pass");

let nivel_seguridad = document.querySelector(".nivel-seguridad");

let chk_may = document.getElementById("may");
let chk_min = document.getElementById("min");
let chk_num = document.getElementById("num");
let chk_car = document.getElementById("car");

console.log(tipo_seguridad.value);
console.log(nivel_seguridad.value);
// chk_may.value = false;
// chk_min.value = false;
chk_num.value = false;
// chk_car.value = false;
txt_password.value = "";
btn_generar.addEventListener("click", () => {
  txt_password.value = "";
  validarNumerico(tipo_seguridad, nivel_seguridad);
  validar
});
// CONTRASEÑA :::
function validarNumerico(tipo, nivel) {
  // Numerico Debil.
  const valPassDebil = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = numDebil();
    }
  };

  // Numerico Medio.
  const valPassMedia = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = numMedio();
    }
  };

   // Numerico Segura.
   const valPassSegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = numSeguro();
    }
  };

   // Numerico Muy Segura.
   const valPassMuySegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = numMuySeguro();
    }
  };

  valPassDebil(tipo, nivel);
  valPassMedia(tipo, nivel);
  valPassSegura(tipo, nivel);
  valPassMuySegura(tipo, nivel);
}
function validarMayusculas(tipo, nivel){
  
}

//Numerico Media.
const validarPassDebil = () => {
  if (chk_) {
  }
};
