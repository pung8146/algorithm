  function solution(keyinput, board) {
    var answer = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "up") {
            if (y + 1 <= board[1] / 2) {
                y += 1;
            }
        } else if (keyinput[i] === "down") {
            if (y - 1 >= -board[1] / 2) {
                y -= 1;
            }
        } else if (keyinput[i] === "left") {
            if (x - 1 >= -board[0] / 2) {
                x -= 1;
            }
        } else if (keyinput[i] === "right") {
            if (x + 1 <= board[0] / 2) {
                x += 1;
            }
        }
    }
    answer.push(x);
    answer.push(y);

    return answer; 
}