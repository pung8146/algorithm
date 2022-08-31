const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 사분면 구하기

const A = Number(input[0]);
const B = Number(input[1]);

if(A > 0 && B > 0) {
    return console.log("1");
} else if(A < 0 && B > 0) {
    return console.log("2");
} else if(A < 0 && B < 0) {
    return console.log("3");
} else if(A > 0 && B < 0) {
    return console.log("4");
}