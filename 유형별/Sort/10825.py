import sys

N = int(input())
array = []

for _ in range(N):
  info = list(map(str, sys.stdin.readline().rstrip().split()))
  
  for i in range(1, 4):
    info[i] = int(info[i])

  array.append(info)

array.sort(key = lambda x: (-x[1], x[2], -x[3], x[0]))

for item in array:
  print(item[0])