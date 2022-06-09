
// ES6
(function(){

    let name = 'NolBu';
    console.log('My Name is ' + name);
    console.log(`My Name is ${name}`);      // 보간법, Vue => {{name}}


    let obj = {
        name: 'HungBu',
        age: 25,
        child: ['one', 'two'],
        info: {
            tel: '010-1234-5678',
            add: 'Seoul'
        },
        toString: function(){
            console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
            console.log(`${this.name}님의 나이는 ${this.age}세 입니다.`);

            // ES6 - tempate 문자열. 개행과 스페이스도 그대로 유지한다
            console.log(`${this.name}님은       ${this.info.add}에 거주하며
전화 번호는 ${this.info.tel}입니다`);
            
        }
    }
    
    obj.toString();

    // 템플릿 리터널 내부에서 연산자는 사용이 가능하다.
    const user = 'admin';
    console.log(`방문하신 분은 ${user === 'admin' ? '관리자' : '일반 유저'}`);

})();