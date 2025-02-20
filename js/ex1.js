'use strict';

// alert("Hello");

// let result = confirm('Yes');
// console.log(result);

// let age = prompt("Введите возраст", 18);
// console.log(age);


// let x = 1;

// if (x < 0) console.log('x отриц');
// else if (x > 0) console.log('x полож');
// else console.log('x = 0')

// let age = (x >= 18) ? true : false;
// console.log(age);

// let z = 1;
// if(z >= 2 && z <= 7) console.log("z попадает в [2; 7]");
// else console.log('z не попадаетв [2; 7]');

// let item = -3;
// switch(item) {
//     case 1: console.log('item = 1'); break;
//     case 2: console.log('item = 2'); break;
//     case 3: console.log('item = 3'); break;
//     case 4: console.log('item = 4'); break;
//     default: console.log('item другое значение');
// }


// let s = 0;

// while (s <= 100) {
//     console.log(s, i);
//     s += i++;
// }
// console.log(s, i);

// for(let i = 1; s < 100; ++i) {
//     s += i;
//     console.log(s, i);
// }
// console.log(s);

// const PSW = "pass";
// let psw = null;
// do {
//     psw = prompt("Введите пароль","");
// }
// while(psw != PSW);
// console.log("Вы вошли в систему!");

// for(let i = -5; i <= 5; ++i) {
//     if(i == 0) continue;
//     console.log('i = ' + i);
// }

// function show(from, text) {
//     let msg = `${from}: ${email} ${text}`;
//     return msg;
// }
// let email = '111@mail.ru'

// let msg = show('ruslan', 'hello');

// function nan(x) {
//     console.log(x)
// }
// nan(msg);
// nan(show('Lenochca', 'how are you?'));
// nan('hello')

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//         console.log(i); //простое
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// showPrimes(20);

// let show = function() {
//     console.log('Hello!');
// };

// show();

// function Cooki(text, yes, no) {
//     if (confirm(text)) yes();
//     else no();
// }
// function yes() {
//     console.log('Согласились');
// }
// function no() {
//     console.log('Отказались');
// }
// Cooki('У нас куки', yes, no);

// Cooki(
//     'У нас куки',
//     function () { console.log('Согласились')},
//     function () { console.log('Отказались')}
// );


// (function() {
//     console.log("это анонимная функция");
// })();

// console.log("start");
// setTimeout(function() {
//     console.log("это анонимная функция");
//     console.log("end");
// }, 3000);

let anonim = () => {
    return "this is strelochnaya function";
}

console.log(anonim());
