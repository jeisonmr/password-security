import {pinCaracteres} from './car.js';
import {numMuySeguro} from './num.js';
// console.log(pinCaracteres(3));
// console.log(numMuySeguro());

let txt_password = document.querySelector('.txt-password');

let chk_may = document.getElementById('may');
let chk_min = document.getElementById('min');
let chk_num = document.getElementById('num');
let chk_car = document.getElementById('car');

var bool = false;

chk_car.addEventListener('click', ()=>{
    bool = true;
    console.log(bool);
});
console.log(bool);