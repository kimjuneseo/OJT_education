/*eslint-disable*/
(function(){

    // 일반 함수. 
    function fn(){
        console.log('funcion');
    }
    fn();

    /* 이런 식으로는 사용불가
    fn() => {

    }
    */

    let ary = [10, 11, 100, 101, 1000];
    // [20, 22, 200, ..]
    // 익명함수(이름이 없는 함수)
    
    const arrOne = [];
    for(let i = 0; i < ary.length; i++) {
        arrOne.push(ary[i] * 2);
    }
    console.log(arrOne);

    // map의 결과는 항상 배열이다. 순환하는 배열의 개수와 동일한 length가 된다
    const arrTwo = ary.map(function(item, i) {
        return item * 2;
    });
    console.log(arrTwo);

    // Arrow 함수로 변경
    const arrThree = ary.map( item => {
        return item * 2;
    });
    console.log(arrThree);
    console.log('');


    // Filter
    const arrFour = [];
    for(let i = 0; i < ary.length; i++) {
        if(ary[i] % 2 === 0) arrFour.push(ary[i]);
    };
    console.log(arrFour);


    // const arrFive = ary.filter( (item, index) => {
    //     // true를 리턴하는 것이 아니라 true인 요소(item)이 리턴된다.
    //     return item % 2 === 0;          
    // });
    const arrFive = ary.filter( (item, index) => item % 2 === 0 );
    console.log(arrFive);
    /*
    arrSix = [
        {no: 1, name: 'Hong0', value: 10},
        {no: 2, name: 'Hong1', value: 11},
    ]
    */

    // { 가 Arrow 함수의 시작으로 인식을 한다. 
    // 따라서 객체가 한줄에 리턴되는 경우는 ()로 묶는다
    const arrSix = ary.map( (item, i) => ({no: i+1, name: `Hong${i}`, value: item*2}) );
    console.log(arrSix);
    console.log('');

    // console.log(arrSix[3]);         // index가 0부터 시작이라 4번째거가 나온다
    const person = (no) => {
        // for(let i = 0; i < arrSix.length; i++) {
        //     if(arrSix[i].no === no) return arrSix[i];
        // }
        const person = arrSix.find( (item, index) => item.no === no );
        return person;
    }
    // const person = (no) => arrSix.find( (item, index) => item.no === no );
    console.log(person(3));

    const personIndex = (no) => arrSix.findIndex( item => item.no === no );
    const i = personIndex(3);       // no가 3인 요소의 배열 순서 (2)가 리턴된다
    console.log(arrSix[i]);
})();