/*
I: 문자열 s (괄호로 이루어진 문자열)
O: 올바른 괄호 문자열인지 여부(boolean)
C: s는 '('와 ')'로만 이루어져 있음
E: 빈 문자열일 경우, 문자열 길이가 홀수인 경우

algo: 스택(카운터 이용)
ds: 변수(카운터)

solution:
- 문자열 길이가 홀수인 경우 무조건 false 반환(올바른 괄호가 될 수 없음)
- 카운터 변수를 이용해 열린 괄호('(')는 +1, 닫힌 괄호(')')는 -1로 계산
- 순회 중 카운터가 음수가 되면 ')'가 먼저 나온 것이므로 false 반환
- 모든 순회를 마친 후 카운터가 0이면 true(올바른 괄호), 0이 아니면 false 반환
*/

function solution(s){
    if(s.legnth % 2 == 1) return false;
    
    let curNum = 0;
    for(let c of s){
        curNum += c == "(" ? 1 : -1;
        if(curNum < 0) return false;
    }
    return curNum ? false: true;
}
