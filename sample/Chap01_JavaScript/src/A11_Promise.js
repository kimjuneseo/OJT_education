
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

const one = () => {
    console.log('start');

    console.log('end')
    
}

const two = (ms) => {
    console.log('1. Start');
    const promise = new Promise( (res, rej) => {
        // res => 성공시 값을 전달하는 함수
        // rej => 실패시 값을 전달하는 함수
        setTimeout(() => {
            if(ms < 1000) rej('시간이 너무 짧습니다.');
            
            res(ms);
        },ms);
    });
    return promise;
};

 two(1500)
.then(data => {   // res가 전달하는 값을 받아처리}
    console.log(data)
})
.catch(err => {
    console.log(err)
})

let a = 100
console.log(a)
setTimeout(() => {
    a = 200
}, 1000);
console.log(a)
