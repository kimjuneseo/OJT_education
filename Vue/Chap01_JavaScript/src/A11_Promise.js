
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

const one = () => {
    console.log('start');

    sleep(1000);
    console.log('처리완료');

    console.log('end');
}
// one();


let result = 0;
function three() {
    console.log('start');
    setTimeout( () => {
        result = 100;
        console.log(result);

        setTimeout( () => {
            result = result + 1500;
            console.log(result);
        }, 1500)
    }, 1000)
    console.log('end');
}

// three();
// console.log(result);

const two = (ms) => {
    console.log('1. Start');
    const promise = new Promise( (resolve, reject) => {
        // resolve => 성공시 값을 전달하는 함수
        // reject => 실패시 값을 전달하는 함수
        setTimeout( () => {
            if(ms < 1000) reject('시간이 너무 짧습니다.');

            console.log('처리중...');
            resolve(ms);
        }, ms);
    });
    console.log('2. End');

    return promise;
}

let twoValue = 0;
two(1500)
.then( data => {            // resolve 함수가 전달하는 값을 받아 처리
    console.log(data);
    twoValue = data;

    // 다음시간이 걸리는 작업(promise)을 여기서 요청한다.
    // 결과는 다음 then이 받는다
    return two(data + 500);
})
.then( data => {
    console.log(data);
    // 다음시간이 걸리는 작업(promise)을 여기서 요청한다.
    // 결과는 다음 then이 받는다
    return two(data + 500)
})
.then( data => {
    console.log(data)
})
.catch( err => {
    console.log(err);
});
console.log('twoValue=> ', twoValue);           // 0