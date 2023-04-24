const express = require('express');
const app = express();
const path = require('path')

console.log(__dirname)

app.use(express.static(path.join(__dirname,'public')))
//express.static() 함수는 Express에서 제공하는 내장 미들웨어 함수로, 지정한 디렉토리의 정적 파일을 제공하는 역할을 합니다.
//path.join(__dirname,'public')은 현재 파일이 위치한 디렉토리와 'public' 디렉토리를 합쳐서 절대 경로를 생성하는 코드입니다.
//이렇게 생성된 절대 경로는 express.static() 함수의 첫 번째 인수로 전달됩니다.

// 즉, 이 코드는 현재 파일이 위치한 디렉토리와 'public' 디렉토리를 합쳐서 정적 파일을 제공하는 미들웨어 함수를 사용하도록 Express 애플리케이션에 설정하는 코드입니다.
// 이렇게 설정된 미들웨어 함수는 클라이언트로부터 요청된 파일이 public 디렉토리에 존재하는 경우 해당 파일을 응답으로 전송합니다.

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('포트 :: ' +PORT )
})