N = int(input())
dp = [0 for _ in range(N+1)]

if N >= 2: dp[2] = 1
if N >= 3: dp[3] = 1

if N >= 4:
  for i in range(4, N+1):
    # 1을 뺐을 때
    dp[i] = dp[i-1] + 1

    # 2로 나눌 때
    if i % 2 == 0:
      dp[i] = min(dp[i], dp[i // 2] + 1)
    
    # 3으로 나눌 때
    if i % 3 == 0:
      dp[i] = min(dp[i], dp[i // 3] + 1)

print(dp[N])