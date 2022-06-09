// 각각의 파일을 export 키워드를 달아서 모듈화
export let num = 10.25;

function onAdd(x, y) {
    return x + y;
}

function longNameFunction() {
    return 'longNameFunction';
}

// 또는 한번에 객체로 묶어서 모듈화
export {onAdd, longNameFunction}

