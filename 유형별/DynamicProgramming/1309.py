N = int(input())
dp = [0 for _ in range(N + 1)]
dp[1] = 3

if N >= 2: dp[2] = 7
if N >= 3: dp[3] = 17

if N >= 4:
  for i in range(4, N+1):
    dp[i] = (dp[i-1] * 2 + dp[i-2]) % 9901

print(dp[N] % 9901)

# 그러하다. 나는 점화식을 잘 못 찾는 인간이었다.