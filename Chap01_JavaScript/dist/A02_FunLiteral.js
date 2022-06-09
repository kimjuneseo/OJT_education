"use strict";

/* eslint-disable */
(function () {
  // ES5. 함수 리터럴
  var sayHello = function sayHello() {
    return 1;
  };

  console.log('1 => ' + sayHello()); // 1

  {
    var sayHello = function sayHello() {
      return 2;
    };

    console.log('2 => ' + sayHello()); // 2
  }
  console.log('3 => ' + sayHello()); // 2

  console.log(""); // ES6. Function

  var yourHello = function yourHello() {
    return 1;
  };

  console.log('1 => ' + yourHello()); // 1

  {
    var _yourHello = function _yourHello() {
      return 2;
    };

    console.log('2 => ' + _yourHello()); // 2
  }
  console.log('3 => ' + yourHello()); // 1

  console.log("");
})();