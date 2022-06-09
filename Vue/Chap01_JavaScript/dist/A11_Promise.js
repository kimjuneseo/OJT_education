"use strict";

function sleep(ms) {
  var wakeUp = Date.now() + ms;

  while (Date.now() < wakeUp) {}
}

;

var one = function one() {
  console.log('start');
  sleep(1000);
  console.log('처리완료');
  console.log('end');
}; // one();


var result = 0;

function three() {
  console.log('start');
  setTimeout(function () {
    result = 100;
    console.log(result);
    setTimeout(function () {
      result = result + 1500;
      console.log(result);
    }, 1500);
  }, 1000);
  console.log('end');
} // three();
// console.log(result);


var two = function two(ms) {
  console.log('1. Start');
  var promise = new Promise(function (resolve, reject) {
    // resolve => 성공시 값을 전달하는 함수
    // reject => 실패시 값을 전달하는 함수
    setTimeout(function () {
      if (ms < 1000) reject('시간이 너무 짧습니다.');
      console.log('처리중...');
      resolve(ms);
    }, ms);
  });
  console.log('2. End');
  return promise;
};

var twoValue = 0;
two(1500).then(function (data) {
  // resolve 함수가 전달하는 값을 받아 처리
  console.log(data);
  twoValue = data; // 다음시간이 걸리는 작업(promise)을 여기서 요청한다.
  // 결과는 다음 then이 받는다

  return two(data + 500);
}).then(function (data) {
  console.log(data); // 다음시간이 걸리는 작업(promise)을 여기서 요청한다.
  // 결과는 다음 then이 받는다

  return two(data + 500);
}).then(function (data) {
  console.log(data);
})["catch"](function (err) {
  console.log(err);
});
console.log('twoValue=> ', twoValue); // 0