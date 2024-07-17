import sys

N, M = map(int, input().split())
S = []
count = 0

for i in range(N):
  S.append(sys.stdin.readline())

for i in range(M):
  temp = sys.stdin.readline()
  if temp in S:
    count += 1

print(count)