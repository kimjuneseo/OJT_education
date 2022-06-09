"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var nickname = "NolBu";
console.log("name: " + nickname + " typeof: " + _typeof(nickname));
nickname = 10;
console.log("name: " + nickname + " typeof: " + _typeof(nickname)); // 선언한 변수를 재 선언해도 에러 아님

var nickname = true;
console.log("name: " + nickname + " typeof: " + _typeof(nickname)); // var 변수는 함수 이외의 {} 스코프(범위)를 갖지 않는다

if (true) {
  var nickname = "HungBu";
  console.log("name: " + nickname + " typeof: " + _typeof(nickname));
}

console.log("name: " + nickname + " typeof: " + _typeof(nickname));

for (var i = 0; i < 3; i++) {}

console.log("i: " + i + " typeof: " + _typeof(i));
console.log(""); // ES6 (2015)

var age = 20;
console.log("age: " + age + " typeof: " + _typeof(age)); // 태생이 동적 타입 언어. 에러 없이 변경된다

age = "BangJa";
console.log("age: " + age + " typeof: " + _typeof(age)); // 선언한 변수를 재 선언할 수 없다.
// let age = true;          // Error
// 모든 {}에서 스코프(범위)를 갖는다

if (true) {
  var _age = true;
  console.log("age: " + _age + " typeof: " + _typeof(_age)); // true
}

console.log("age: " + age + " typeof: " + _typeof(age)); // BangJa

for (var k = 0; k < 3; k++) {} // console.log('k: ' + k + ' typeof: ' + typeof(k));        // Error


console.log(""); // 개행을 위해 사용(확인 편하라고 적은 것임)
// const => 상수. Java의 final 변수

var MY_PI = 3.1415;
console.log("MY_PI: " + MY_PI + " typeof: " + _typeof(MY_PI)); // MY_PI = 100;       // 초기화 이후 값 변경이 안된다.
// 따라서 선언시 초기화 하지 않는 경우도 에러. 항상 선언과 동시에 초기화 필수
// const ABC;

var MY_ARR = [10, 20];
MY_ARR[0] = 100; // OK. 메모리 번지를 바꾸는게 아니라 그 리퍼런스 값을 변경

console.log("MY_ARR: " + MY_ARR + " typeof: " + _typeof(MY_ARR)); // MY_ARR = [100];          // Error

var MY_OBJ = {
  name: "NolBu",
  age: 30
};
MY_OBJ.name = "HangDan";
console.log("MY_OBJ: " + JSON.stringify(MY_OBJ) + " typeof: " + _typeof(MY_OBJ)); // MY_OBJ = { address: 'Seoul' };   // Error. 주소값 변경은 안됨