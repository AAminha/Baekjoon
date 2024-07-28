import sys

N, M = map(int, input().split())
arr = []
dp = [[0 for _ in range(M+1)] for _ in range(N+1)]

for i in range(N):
  arr.append(list(map(int, sys.stdin.readline().split())))

for a in range(1, N + 1):
  for b in range(1, M + 1):
    dp[a][b] = dp[a][b-1] + dp[a-1][b] + arr[a-1][b-1] - dp[a-1][b-1]

K = int(input())

for n in range(K):
  i, j, x, y = map(int, sys.stdin.readline().split())
  sum = dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1]
  print(sum)