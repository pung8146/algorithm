// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = Number(input[0]);
const B = input[1];

let num3 = A * Number(B[2]);
let num4 = A * Number(B[1]);
let num5 = A * Number(B[0]);
let num6 = A * Number(B);


console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
//
