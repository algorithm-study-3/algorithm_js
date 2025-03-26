import sys

input = sys.stdin.readline
output = sys.stdout.write

def do_command(command, stack):
    if (command[0] == 'push'):
        stack.append(int(command[1]))
    if (command[0] == 'pop'):
        if (len(stack) == 0):
            output('-1\n')
        else:
            output(str(stack.pop()) + '\n')
    if (command[0] == 'size'):
        output(str(len(stack)) + '\n')
    if (command[0] == 'empty'):
        if (len(stack) == 0):
            output('1\n')
        else:
            output('0\n')
    if (command[0] == 'top'):
        if (len(stack) == 0):
            output('-1\n')
        else:
            output(str(stack[-1]) + '\n')


def main():
    stack = []
    n = int(input())
    for _ in range(n):
        command = input().split()
        do_command(command, stack)


if __name__ == "__main__":
    main()
