N = int(input())
dp = ["" for _ in range(N+1)]
dp[1] = "SK"
if N >= 2: dp[2] = "CY"
if N >= 3: dp[3] = "SK"

for i in range(1, N+1):
  if dp[i-1] == "SK": dp[i] = "CY"
  else: dp[i] = "SK"

print(dp[N])
