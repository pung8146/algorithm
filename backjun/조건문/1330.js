const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
  return console.log(">");
} else if (A < B) {
  return console.log("<");
} else if (A === B) {
  return console.log("==");
}
