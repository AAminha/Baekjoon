import sys

while True:
  N, M = map(int, input().split())

  if N == 0 and M == 0: break
  
  SK = []
  SY = []

  for _ in range(N):
    SK.append(int(sys.stdin.readline().rstrip()))

  for _ in range(M):
    SY.append(int(sys.stdin.readline().rstrip()))

  SK_index = 0
  SY_index = 0
  count = 0

  while SK_index < N and SY_index < M:
    if SK[SK_index] < SY[SY_index]:
      SK_index += 1
    elif SK[SK_index] > SY[SY_index]:
      SY_index += 1
    elif SK[SK_index] == SY[SY_index]:
      count += 1
      SK_index += 1
      SY_index += 1

  print(count)