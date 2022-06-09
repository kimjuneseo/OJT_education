"use strict";

var _this2 = void 0;

/*eslint-disable*/
(function () {
  var _this = this;

  // 함수 리터럴. 함수 표현식 방식만 화살표 함수로 변경 가능.
  var onAdd = function onAdd(x, y) {
    console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
  };

  var onMin = function onMin(x, y) {
    return "".concat(x, " - ").concat(y, " = ").concat(x - y);
  };

  onAdd(10, 20);
  console.log(onMin(10, 20));
  console.log(''); // ES6. 
  // 함수 리터럴 방식만 변경 가능
  // function을 삭제하고 인수 뒤에 => 추가. () => {} 형태가 된다

  var onMulti = function onMulti(x, y) {
    var result = x + y;
    console.log("".concat(x, " * ").concat(y, " = ").concat(result));
  };

  onMulti(10, 20); // 함수가 구문 딱 1개만 있는 경우 값이냐, 실행 구문이냐를 판단해서 알아서 실행
  // 값인 경우 return은 반드시 생략하고 기술한다

  var onDiv = function onDiv(x, y) {
    return console.log("".concat(x, " / ").concat(y, " = ").concat(x / y));
  };

  onDiv(10, 2); // 값인 경우 return 값으로 취급. 이때 return을 기술하면 에러

  var onDiv2 = function onDiv2(x, y) {
    return (
      /* return */
      "".concat(x, " / ").concat(y, " = ").concat(x / y)
    );
  };

  var result = onDiv2(10, 2);
  console.log(result);
  console.log(''); // 매개변수가 1개인 경우 ()를 생략할 수 있다.

  var onDouble = function onDouble(x) {
    return Math.pow(2, x);
  };

  console.log(onDouble(3)); // this의 참조가 다르다 (중요)**

  var obj = {
    name: 'NolBu',
    age: 30,
    infoNormal: function infoNormal() {
      console.log(this);
      console.log("".concat(this.name, " / ").concat(this.age));
    },
    // 함수 내부의 this는 존재하지 않는다.
    // 따라서 this는 자신이 속한 객체(여기서는 obj)의 this를 따른다
    infoArrow: function infoArrow() {
      console.log(_this);
      console.log("".concat(_this.name, " / ").concat(_this.age));
    }
  };
  obj.infoNormal();
  obj.infoArrow();
  console.log('');
  console.log(obj);
})();

var onOne = function onOne() {
  console.log(_this2);
};

onOne();