N = int(input())
wine = []
dp = [0 for _ in range(N)]

for _ in range(N):
  wine.append(int(input()))

if N >= 1: dp[0] = wine[0]
if N >= 2: dp[1] = wine[0] + wine[1]
if N >= 3: dp[2] = max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2])

if N >= 4:
  for i in range(3, N):
    dp[i] = max(dp[i-3] + wine[i-1] + wine[i], dp[i-2] + wine[i], dp[i-1])

print(dp[N-1])