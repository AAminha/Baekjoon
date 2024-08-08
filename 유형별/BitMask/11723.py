import sys

M = int(input()) # 1 ~ 3,000,000
S = [0 for _ in range(20)]

for _ in range(M):
  operation = sys.stdin.readline().rstrip().split(" ")
  num = 0
  if len(operation) == 2: num = int(operation[1])

  if operation[0] == "add":
    S[num-1] = 1
  elif operation[0] == "remove":
    S[num-1] = 0
  elif operation[0] == "check":
    print(S[num-1])
  elif operation[0] == "toggle":
    if S[num-1] == 0: S[num-1] = 1
    else: S[num-1] = 0
  elif operation[0] == "all":
    S = [1 for _ in range(20)]
  else:
    S = [0 for _ in range(20)]

