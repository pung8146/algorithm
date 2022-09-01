const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const H = Number(input[0]);
const M = Number(input[1]);

if(M >= 45){
    return console.log(`${H} ${M - 45}`);
} else if( H === 0 && M < 45){
    return console.log(`23 ${M + 15}`)
} else {
    return console.log(`${H - 1} ${M + 15}`)
}
