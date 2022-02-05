import { mayusculasDebil, mayusculasMedio, mayusculasSegura, mayusculasMuySegura, pinMayusculas} from "./may.js";
import { minusculasDebil, minusculasMedio, minusculasSegura, minusculasMuySegura, pinMinusculas} from "./min.js";
import { numDebil, numMedio, numMuySeguro, numSeguro,pinNumeros } from "./num.js";
import {cararacteresDebil, caracteresMedio, caracteresSegura, caracteresMuySegura, pinCaracteres} from "./car.js";
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
  // Pass
  validarMayusculas(tipo_seguridad, nivel_seguridad);
  validarMinusculas(tipo_seguridad, nivel_seguridad);
  validarNumerico(tipo_seguridad, nivel_seguridad);
  validarCaracteres(tipo_seguridad, nivel_seguridad);
  
  // Pin
  validarPin(tipo_seguridad);
});
// CONTRASEÑA :::
function validarNumerico(tipo, nivel) {
  // Numerico Debil.
  const valPassNumDebil = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = numDebil();
    }
  };

  // Numerico Medio.
  const valPassNumMedia = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = numMedio();
    }
  };

   // Numerico Segura.
   const valPassNumSegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = numSeguro();
    }
  };

   // Numerico Muy Segura.
   const valPassNumMuySegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = numMuySeguro();
    }
  };

  valPassNumDebil(tipo, nivel);
  valPassNumMedia(tipo, nivel);
  valPassNumSegura(tipo, nivel);
  valPassNumMuySegura(tipo, nivel);
}
function validarMayusculas(tipo, nivel){
    // Mayusculas Debil.
    const valPassMayDebil = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
        txt_password.value = mayusculasDebil();
      }
    };
  
    // Mayusculas Medio.
    const valPassMayMedia = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
        txt_password.value = mayusculasMedio();
      }
    };
  
     // Mayusculas Segura.
     const valPassMaySegura = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
        txt_password.value = mayusculasSegura();
      }
    };
  
     // Mayusculas Muy Segura.
     const valPassMayMuySegura = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
        txt_password.value = mayusculasMuySegura();
      }
    };

    valPassMayDebil(tipo, nivel);
    valPassMayMedia(tipo, nivel);
    valPassMaySegura(tipo, nivel);
    valPassMayMuySegura(tipo, nivel);
}
function validarMinusculas(tipo, nivel){
  // Minusculas Debil.
  const valPassMinDebil = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = minusculasDebil();
    }
  };

  // Minusculas Medio.
  const valPassMinMedia = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = minusculasMedio();
    }
  };

   // Minusculas Segura.
   const valPassMinSegura = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = minusculasSegura();
    }
  };

   // Minusculas Muy Segura.
   const valPassMinMuySegura = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = minusculasMuySegura();
    }
  };

  valPassMinDebil(tipo, nivel);
  valPassMinMedia(tipo, nivel);
  valPassMinSegura(tipo, nivel);
  valPassMinMuySegura(tipo, nivel);
}
function validarCaracteres(tipo, nivel) {
  // Caracteres Debil.
  const valPassMinDebil = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = cararacteresDebil();
    }
  };

  // Caracteres Medio.
  const valPassMinMedia = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = caracteresMedio();
    }
  };

   // Caracteres Segura.
   const valPassMinSegura = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = caracteresSegura();
    }
  };

   // Caracteres Muy Segura.
   const valPassMinMuySegura = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = caracteresMuySegura();
    }
  };

  valPassMinDebil(tipo, nivel);
  valPassMinMedia(tipo, nivel);
  valPassMinSegura(tipo, nivel);
  valPassMinMuySegura(tipo, nivel);
}


// PIN
function validarPin(tipo){
  const valPinMay = () => {
    if (chk_may.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinMayusculas();
    }
  };

  const valPinMin = () => {
    if (chk_min.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinMinusculas();
    }
  };

  const valPinNum = () => {
    if (chk_num.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinNumeros();
    }
  };

  const valPinCar = () => {
    if (chk_car.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinCaracteres();
    }
  };

  valPinMay(tipo);
  valPinMin(tipo);
  valPinNum(tipo);
  valPinCar(tipo);
}