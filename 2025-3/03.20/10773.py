"""
I: 첫 번째 입력값 k (입력 개수), 이후 k개의 정수
O: 스택에 남은 값들의 합
C: 입력값은 모두 정수이다.
E: 

algo: 스택을 이용하여 0이면 pop, 아니면 push 후 합 계산
ds: 스택

solution:
- 빈 스택을 생성
- k개의 정수를 입력받아 number가 0이면 스택에서 마지막 값을 제거
- number가 0이 아니면 스택에 추가
- 최종적으로 스택에 남은 값들의 합을 출력
"""


import sys

input = sys.stdin.readline
output = sys.stdout.write


def book_keeping(number, stack):
    if (number == 0):
        stack.pop()
    else:
        stack.append(number)


def main():
    stack = []
    k = int(input())
    for _ in range(k):
        number = int(input())
        book_keeping(number, stack)

    result = sum(stack)
    output(str(result))


if __name__ == "__main__":
    main()
