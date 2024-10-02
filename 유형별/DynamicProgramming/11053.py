N = int(input())
array = list(map(int, input().split()))
dp = [1 for _ in range(N)]
max_result = 0

for i in range(1, N):
  for j in reversed(range(0, i)):
    if array[i] > array[j]:
      if dp[i] == 0: dp[i] = dp[j] + 1
      else: dp[i] = max(dp[i], dp[j] + 1)
    elif array[i] == array[j]:
      if dp[i] == 0: dp[i] = dp[j]
      else: dp[i] = max(dp[i], dp[j])

for i in range(N):
  max_result = max(max_result, dp[i])

print(max_result)