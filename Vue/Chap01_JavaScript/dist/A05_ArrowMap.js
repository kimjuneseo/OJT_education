"use strict";

/*eslint-disable*/
(function () {
  // 일반 함수. 
  function fn() {
    console.log('funcion');
  }

  fn();
  /* 이런 식으로는 사용불가
  fn() => {
   }
  */

  var ary = [10, 11, 100, 101, 1000]; // [20, 22, 200, ..]
  // 익명함수(이름이 없는 함수)

  var arrOne = [];

  for (var _i = 0; _i < ary.length; _i++) {
    arrOne.push(ary[_i] * 2);
  }

  console.log(arrOne); // map의 결과는 항상 배열이다. 순환하는 배열의 개수와 동일한 length가 된다

  var arrTwo = ary.map(function (item, i) {
    return item * 2;
  });
  console.log(arrTwo); // Arrow 함수로 변경

  var arrThree = ary.map(function (item) {
    return item * 2;
  });
  console.log(arrThree);
  console.log(''); // Filter

  var arrFour = [];

  for (var _i2 = 0; _i2 < ary.length; _i2++) {
    if (ary[_i2] % 2 === 0) arrFour.push(ary[_i2]);
  }

  ;
  console.log(arrFour); // const arrFive = ary.filter( (item, index) => {
  //     // true를 리턴하는 것이 아니라 true인 요소(item)이 리턴된다.
  //     return item % 2 === 0;          
  // });

  var arrFive = ary.filter(function (item, index) {
    return item % 2 === 0;
  });
  console.log(arrFive);
  /*
  arrSix = [
      {no: 1, name: 'Hong0', value: 10},
      {no: 2, name: 'Hong1', value: 11},
  ]
  */
  // { 가 Arrow 함수의 시작으로 인식을 한다. 
  // 따라서 객체가 한줄에 리턴되는 경우는 ()로 묶는다

  var arrSix = ary.map(function (item, i) {
    return {
      no: i + 1,
      name: "Hong".concat(i),
      value: item * 2
    };
  });
  console.log(arrSix);
  console.log(''); // console.log(arrSix[3]);         // index가 0부터 시작이라 4번째거가 나온다

  var person = function person(no) {
    // for(let i = 0; i < arrSix.length; i++) {
    //     if(arrSix[i].no === no) return arrSix[i];
    // }
    var person = arrSix.find(function (item, index) {
      return item.no === no;
    });
    return person;
  }; // const person = (no) => arrSix.find( (item, index) => item.no === no );


  console.log(person(3));

  var personIndex = function personIndex(no) {
    return arrSix.findIndex(function (item) {
      return item.no === no;
    });
  };

  var i = personIndex(3); // no가 3인 요소의 배열 순서 (2)가 리턴된다

  console.log(arrSix[i]);
})();