# I: 정수 배열 arr
# O: 연속된 중복을 제거한 배열
# C: 입력된 배열의 원소는 정수이다.
# E: 

# algo: 
# ds: 스택 
# solution:
# - 스택을 초기화한다.
# - 배열을 순회하면서 현재 값이 스택의 마지막 값과 다르면 스택에추가한다.
# - 최종적으로 중복이 제거된 배열을 반환한다.

def solution(arr):
    stack = [];
    
    for num in arr:
        if(len(stack) == 0):
            stack.append(num)
        if(stack[-1] != num):
            stack.append(num)
            
    return stack


