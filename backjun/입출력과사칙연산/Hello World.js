// Hello World!를 출력하시오.

const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number); // 입력 값 가져오기 + 데이터 정제

console.log('Hello World!')