N = int(input())
array = list(map(int, input().split()))
dp = [0 for _ in range(N)]
dp[0] = array[0]

for i in range(1, N):
  if dp[i-1] + array[i] < array[i]:
    dp[i] = array[i]
  else:
    dp[i] = dp[i-1] + array[i]

print(max(dp))