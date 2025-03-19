/*
I:arr [1,1,3,3,0,1,1]
O:answer [1,3,0,1]
C:
배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

E: if(arr.length == 1)return arr;

algo: stack
ds: arr

solution
- 스택을 만들고
- for arr길이만큼
    - 현재 값과 스택 맨위게 같으면 걍 넘어가고
    - 아니면 스택에 추가한다
- 스택을 리턴한다.
*/

function solution(arr)
{
    var answer = [arr[0]];
    
    for(let i = 1; i < arr.length; i ++){
        if(answer[answer.length - 1] == arr[i])continue;
        answer.push(arr[i]);
    }
    
    return answer;
}