import sys

N = int(input())
paints = []
dp = [[0 for _ in range(3)] for _ in range(N)]

for _ in range(N):
  paints.append(list(map(int, sys.stdin.readline().rstrip().split())))

dp[0] = paints[0]
for i in range(1, N):
  dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + paints[i][0]
  dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + paints[i][1]
  dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + paints[i][2]

print(min(dp[N-1]))