"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longNameFunction = longNameFunction;
exports.num = void 0;
exports.onAdd = onAdd;
// 각각의 파일을 export 키워드를 달아서 모듈화
var num = 10.25;
exports.num = num;

function onAdd(x, y) {
  return x + y;
}

function longNameFunction() {
  return 'longNameFunction';
} // 또는 한번에 객체로 묶어서 모듈화