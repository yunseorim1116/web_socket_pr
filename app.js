const express = require('express');
const http = require('http')
const app = express();
const path = require('path')
const server = http.createServer(app)
const sockeIO = require('socket.io')
const io = sockeIO(server)

app.use(express.static(path.join(__dirname,'src')))
//express.static() 함수는 Express에서 제공하는 내장 미들웨어 함수로, 지정한 디렉토리의 정적 파일을 제공하는 역할을 합니다.
//path.join(__dirname,'src')은 현재 파일이 위치한 디렉토리와 'src' 디렉토리를 합쳐서 절대 경로를 생성하는 코드입니다.
//이렇게 생성된 절대 경로는 express.static() 함수의 첫 번째 인수로 전달됩니다.

// 즉, 이 코드는 현재 파일이 위치한 디렉토리와 'src' 디렉토리를 합쳐서 정적 파일을 제공하는 미들웨어 함수를 사용하도록 Express 애플리케이션에 설정하는 코드입니다.
// 이렇게 설정된 미들웨어 함수는 클라이언트로부터 요청된 파일이 src 디렉토리에 존재하는 경우 해당 파일을 응답으로 전송합니다.

//=> 쉽게 말해 걍 내 폴더에 접근 가능하게 만들어서 브라우저에 뿌려준다.

const PORT = process.env.PORT || 5000

io.on('connection', (socket)=>{
console.log('연결이 이루어졌어요')
})

server.listen(PORT,()=>{
    console.log('포트 :: ' +PORT )
})