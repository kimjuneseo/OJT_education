// operator.js

let x = 10;

// 앞의 조건이 false 이면 뒤 조건을 체크하지 않음
let result = x > 10 || x > 20;
console.log(result);

// ||를 연산자로도 사용 가능
// ||의 앞에 값이 true(값이 있니)면 앞에 값을 그대로 대입
// ||의 앞에 값이 false(값이 없니)면 뒤의 값을 대입(뒤의 구문이 실행)
result = x || 100;
console.log(result);      // 10

// 앞 x가 false면 뒤를 실행하지 않고 x 값 대입
result = x && 100;
console.log(result);
