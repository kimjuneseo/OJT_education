
// ES6
(function(){

    console.log([10, 11, 100]);
    console.log('NolBu');
    console.log('');

    // ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷 
    function spreadFun(a, b, c, d, e, ...rest) {
        console.log(`a => ${a}`);
        console.log(`b => ${b}`);
        console.log(`c => ${c}`);
        console.log(`d => ${d}`);
        console.log(`e => ${e}`);
        console.log(`rest => ${rest} / ${rest.length}`);
    }

    spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
    console.log('')


    // 배열 합치기.
    let aryOne = [10, 20, 30];
    var aryTwo = [1, 2, 3, aryOne];
    console.log(aryTwo);
    console.log('');


    // Object
    let objOne = {
        id: 1,
        name: 'NolBu'
    };

    let objTwo = {
        id: 2,
        address: 'Seoul',
    }
    console.log(objTwo);


    let objThree = {
        id: 3,
        address: 'InChen',
    }
    console.log(objThree);


})();