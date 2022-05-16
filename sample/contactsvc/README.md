# contactsvc

* 연락처 RESTful Service(Node.js + Express + Sqlite3) 샘플
* LGPL License V2.1 (https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
* stepanowon@hotmail.com
* 서버 시작
```
npm install
npm run start
```

> Online Demo1 : http://sample.bmaster.kro.kr  
> API Console : http://sample.bmaster.kro.kr/console

> Online Demo2(HTTPS) : https://contactsvc.herokuapp.com   
 


1. 보기 => 터미널 선택으로 dos 윈도우 활성화
2. contactsvc 내부 폴더로 이동
    cd contactsvc
3. npm i
    설치가 완료되면 node_modules라는 폴더가 생성된다.
4. 서버 실행(back단 node 서버 실행)
    npm start
    꼭 이 이름이라는 보장 없음. 작성하는 사람마다 틀림
    확인은 package.json 파일의 
    "scripts": {
      "start": "node ./server.js",
      "dev": "node ./server.js"
    },

    start라는 이름만 npm start
    다른 이름은 npm run dev

5. 브라우저에서 
    http://localhost:3000/
    로 확인한다.

6. 서버 종료
    cmd 창에서 ctrl + c

7. 브라우저에 표시되는 JSON 파일을 쉽게 보는 chrome plugin
    브라우저에서 크롬스토어 검색
    스토어 검색란에 'json view'
    JSONView 설치

