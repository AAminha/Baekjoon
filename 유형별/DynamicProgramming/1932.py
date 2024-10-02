N = int(input())
tree = []
dp = []

for i in range(N):
  tree.append(list(map(int, input().split())))
  dp.append([0 for _ in range(i+1)])

dp[0][0] = tree[0][0]

for i in range(1, N):
  for j in range(i + 1):
    parent = 0
    if j - 1 >= 0:
      parent = max(parent, dp[i-1][j-1])
    if j <= i - 1:
      parent = max(parent, dp[i-1][j])

    dp[i][j] = parent + tree[i][j]

result = 0
for i in range(N):
  result = max(result, dp[N-1][i])

print(result)