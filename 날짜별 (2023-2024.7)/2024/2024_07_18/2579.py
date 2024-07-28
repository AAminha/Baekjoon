N = int(input())
steps = [0]
dp = [0 for _ in range(N+1)]

for _ in range(N):
  steps.append(int(input()))

dp[1] = steps[1]

if N >= 2: dp[2] = steps[1] + steps[2]

if N >= 3:
  for i in range(3, N+1):
    # 직전 칸에서 올라온 경우 vs 2전 칸에서 올라온 경우
    dp[i] = max(steps[i-1] + dp[i-3], dp[i-2])
    dp[i] += steps[i]

print(dp[N])