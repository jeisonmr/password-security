// Importacion de funciones generadoras de contraseñas y pines.
import { mayusculasDebil, mayusculasMedio, mayusculasSegura, mayusculasMuySegura, pinMayusculas} from "./may.js";
import { minusculasDebil, minusculasMedio, minusculasSegura, minusculasMuySegura, pinMinusculas} from "./min.js";
import { numDebil, numMedio, numMuySeguro, numSeguro,pinNumeros } from "./num.js";
import {cararacteresDebil, caracteresMedio, caracteresSegura, caracteresMuySegura, pinCaracteres} from "./car.js";

// se muestra la contraseña.
let txt_password = document.querySelector(".txt-password");

// Select del tipo ( Contraseña, Pin).
let tipo_seguridad = document.querySelector(".tipo-seguridad");
// Boton para generar las combinaciones.
let btn_generar = document.querySelector(".generador-pass");
// Boton para copiar la contraseña generada.
let btn_copiar = document.querySelector(".copiar-pass");

// Select para elegir el nivel de la contraseña.
let nivel_seguridad = document.querySelector(".nivel-seguridad");

// CheckBox para seleccionar el tipo de contraseña o pin.
let chk_may = document.getElementById("may");
let chk_min = document.getElementById("min");
let chk_num = document.getElementById("num");
let chk_car = document.getElementById("car");

// Vevtor de combinaciones.
let array = new Array();


console.log(parseInt(numDebil()/2));

txt_password.value = "";

// CONTRASEÑA :::
function validarMayusculas(tipo, nivel){
    // Mayusculas Debil.
    const valPassMayDebil = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
        txt_password.value = mayusculasDebil();
      }
    }
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


function valCombinator(){
  if (chk_may.checked && chk_min.checked && chk_num.checked && chk_car.checked && tipo_seguridad.value == "pass") {
    switch (nivel_seguridad.value) {
      case "debil":
      array[0]= mayusculasDebil();
      array[1]= parseInt(numDebil());
      array[2]= minusculasDebil();
      array[3]= cararacteresDebil();
      // console.log(array[0], array[1], array[2], array[3])
      console.log(array[0]+array[1]+array[2]+array[3]);
      txt_password.value = array[0]+array[1]+array[2]+array[3];
        break;
    }
  }
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

  const hideNivelSecurity = () =>{
    if (tipo_seguridad.value == 'passpin'){
      nivel_seguridad.style = "visibility: hidden;";
    }else{
      nivel_seguridad.style = "visibility: visible";
    }
  };



  valPinMay(tipo);
  valPinMin(tipo);
  valPinNum(tipo);
  valPinCar(tipo);
  hideNivelSecurity(tipo);
}



btn_generar.addEventListener("click", () => {
  
  txt_password.value = "";
  // Pass
  validarMayusculas(tipo_seguridad, nivel_seguridad);
  validarMinusculas(tipo_seguridad, nivel_seguridad);
  validarNumerico(tipo_seguridad, nivel_seguridad);
  validarCaracteres(tipo_seguridad, nivel_seguridad);
  valCombinator(tipo_seguridad, nivel_seguridad);
  // Pin
  validarPin(tipo_seguridad);

  // Combinado

    console.log(...array);
  
});




// if (chk_num.checked || chk_min.checked || chk_car.checked) {
//   switch (nivel_seguridad.value) {
//       case "debil":
//         array[0]= mayusculasDebil();
//         array[1]= parseInt(numDebil());
//         array[2]= minusculasDebil();
//         array[3]= cararacteresDebil();
//         txt_password.value =  array[3];
//       break;
//       case "media":
//         array[2]= mayusculasMedio();
//         array[1]= parseInt(numMedio());
//         array[3]= minusculasMedio();
//         array[0]= caracteresMedio();
//       break
//       case "segura":
//         array[2]= mayusculasSegura();
//         array[0]= parseInt(numSeguro());
//         array[3]= minusculasSegura();
//         array[1]= caracteresMuySegura();
//       break;
//       case "msegura":
//         array[3]= mayusculasDebil();
//         array[2]= parseInt(numMedio());
//         array[0]= minusculasSegura();
//         array[1]= caracteresMuySegura();
//       break;
//     default:

//       break;
//   }
// }