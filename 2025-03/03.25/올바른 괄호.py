"""
I: '(' 또는 ')' 로만 이루어진 문자열
O: True(괄호가 바르게 짝지어짐), False(괄호가 바르게 짝 지어지지 않음)
C: 입력값은 '(' 또는 ')' 로만 이루어진다.
E: 

algo: 스택을 이용하여 '('면 push ')'이면 스택에 있는 '('를 pop 해서 한쌍의 괄호를 만든다.
ds: 스택

solution:
1. 문자열의 길이 만큼 for 문을 돈다
2. '(' 이면스택에 넣음
3. ')' 일 때, 스택이 비어있으면 -> 괄호가 올바르게 짝지어 있지 않다는 뜻이니까 -> False 리턴
4. ')' 일 때, 스택이 비어있지 않으면 스택에 있는 '('를 꺼냄 -> 한쌍의 괄호 완성
5. 이걸 문자열 길이만큼 반복
6. 반복이 다 끝났는데 스택이 비어있으면(괄호가 모두 쌍을 이루었다는 뜻) True를 리턴 '(' 가 아직 스택에 남아있으면 False를 리턴

"""
def solution(string):
    stack = []
    
    for s in string:
        if(s == '('):
            stack.append(s)
        else:
            if(len(stack) == 0):
                return False
            elif(stack[-1] == '('):
                stack.pop()
    
    if(len(stack) == 0):
        return True
    else:
        return False

    return True