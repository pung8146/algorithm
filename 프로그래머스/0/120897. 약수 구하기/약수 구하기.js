function solution(n) {
    var answer = [];
    let i = 0;
    while(i <= n){
        if(n % i === 0){
            answer.push(i)
        } 
        i++;
    }
    return answer;
}