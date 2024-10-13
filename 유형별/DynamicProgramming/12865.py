N, K = map(int, input().split())
dp = [0 for _ in range(K+1)]
for _ in range(N):
  W, V = map(int, input().split())

  for i in range(K, -1, -1):
    if i + W <= K:
      dp[i + W] = max(dp[i + W], dp[i] + V)

print(max(dp))