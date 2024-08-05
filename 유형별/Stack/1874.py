import sys
from collections import deque

N = int(sys.stdin.readline().rstrip()) # 1부터 100,000 사이 수
sequence = deque([])
result = []
stack = deque([])

for _ in range(N):
  sequence.append(int(sys.stdin.readline().rstrip()))

num = 0
while sequence :
  num += 1

  while len(stack) > 0 and stack[len(stack) - 1] == sequence[0]:
    stack.pop()
    sequence.popleft()
    result.append("-")

  if len(sequence) > 0 and num <= sequence[0]:
    stack.append(num)
    result.append("+")

  if num == N + 1: break

if len(sequence) == 0:
  print(*result, sep="\n")
else:
  print("NO")