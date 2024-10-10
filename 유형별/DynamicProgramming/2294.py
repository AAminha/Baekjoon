N, K = map(int, input().split())
coins = []
dp = [1e9 for _ in range(K+1)]
dp[0] = 0

for _ in range(N):
  coins.append(int(input()))

for i in range(1, K+1):
  for coin in coins:
    num = i - coin

    if num >= 0:
      dp[i] = min(dp[i], dp[num] + 1)

if dp[K] < 1e9:
  print(dp[K])
else:
  print(-1)