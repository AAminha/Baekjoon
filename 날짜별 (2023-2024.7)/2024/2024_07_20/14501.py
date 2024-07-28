N = int(input())
arr = []
dp = [0 for _ in range(N + 1)]

for _ in range(N):
  arr.append(list(map(int, input().split())))

for i in reversed(range(N)):
  if arr[i][0] + i <= N:
    dp[i] = max(arr[i][1] + dp[arr[i][0] + i], max(dp[i + 1:N + 1]))
  else:
    dp[i] = max(dp[i + 1:N + 1])

print(dp[0])