"use strict";

(function () {
  var obj = {
    name: 'NolBu',
    age: 30
  }; // const name = obj.name;
  // const age = obj.age;
  // 선언되는 변수는 반드시 obj의 key와 동일한 이름이어야 한다.

  var name = obj.name,
      age = obj.age;
  console.log(name, age); // 이미 선언된 name, age 변수가 존재한다면 별칭 사용

  var nick = obj.name,
      num = obj.age;
  console.log(nick, num); // 변수의 초기값도 지정할 수 있다

  var x = obj.name,
      _obj$age = obj.age,
      y = _obj$age === void 0 ? 0 : _obj$age,
      _obj$address = obj.address,
      address = _obj$address === void 0 ? 'Seoul' : _obj$address;
  console.log(x, y, address);
  console.log('');
  var ary = ['A', 'B', 'C'];
  console.log(obj, ary); // 별칭 할당은 안된다. 기본값은 설정 가능

  var a = ary[0],
      b = ary[1],
      c = ary[2],
      _ary$ = ary[3],
      d = _ary$ === void 0 ? 0 : _ary$;
  console.log(a, b, c, d); // 필요없는 순서의 값은 버리고 필요한 순서의 값만 꺼내고자 하는 경우

  var b1 = ary[1],
      _ary$2 = ary[3],
      d1 = _ary$2 === void 0 ? 100 : _ary$2;
  console.log(b1, d1);
})();