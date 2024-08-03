A, K = map(int, input().split())
dp = [0 for _ in range(K+1)]

for i in reversed(range(A, K)):
  num = i * 2

  if num > K:
    dp[i] = dp[i+1] + 1
  elif num == K:
    dp[i] = 1
  else:
    dp[i] = min(dp[i+1], dp[num]) + 1

print(dp[A])