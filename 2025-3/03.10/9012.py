import sys

input = sys.stdin.readline
output = sys.stdout.write

def is_ps(ps):
    stack = []

    for char in ps:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                return "NO" 
    return "NO" if stack else "YES" 

def main():
    t = int(input().strip())
    results = []

    for _ in range(t):
        ps = input().strip()
        results.append(is_ps(ps)) 

    output("\n".join(results) + "\n") 

if __name__ == "__main__":
    main()
