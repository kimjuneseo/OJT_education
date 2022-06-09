"use strict";

// ES6
(function () {
  var name = 'NolBu';
  console.log('My Name is ' + name);
  console.log("My Name is ".concat(name)); // 보간법, Vue => {{name}}

  var obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
      tel: '010-1234-5678',
      add: 'Seoul'
    },
    toString: function toString() {
      console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4.")); // ES6 - tempate 문자열. 개행과 스페이스도 그대로 유지한다

      console.log("".concat(this.name, "\uB2D8\uC740       ").concat(this.info.add, "\uC5D0 \uAC70\uC8FC\uD558\uBA70\n\uC804\uD654 \uBC88\uD638\uB294 ").concat(this.info.tel, "\uC785\uB2C8\uB2E4"));
    }
  };
  obj.toString(); // 템플릿 리터널 내부에서 연산자는 사용이 가능하다.

  var user = 'admin';
  console.log("\uBC29\uBB38\uD558\uC2E0 \uBD84\uC740 ".concat(user === 'admin' ? '관리자' : '일반 유저'));
})();