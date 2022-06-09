

(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }
    // const name = obj.name;
    // const age = obj.age;

    // 선언되는 변수는 반드시 obj의 key와 동일한 이름이어야 한다.
    const {name, age} = obj;
    console.log(name, age);

    // 이미 선언된 name, age 변수가 존재한다면 별칭 사용
    const {name: nick, age: num} = obj;
    console.log(nick, num);

    // 변수의 초기값도 지정할 수 있다
    const {name: x, age: y = 0, address='Seoul'} = obj;
    console.log(x, y, address);
    console.log('');


    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);

    // 별칭 할당은 안된다. 기본값은 설정 가능
    const [a, b, c, d = 0] = ary;
    console.log(a, b, c, d);

    // 필요없는 순서의 값은 버리고 필요한 순서의 값만 꺼내고자 하는 경우
    const [, b1, , d1 = 100] = ary;
    console.log(b1, d1);
    
})();
