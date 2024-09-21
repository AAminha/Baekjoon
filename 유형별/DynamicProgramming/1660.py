INF = 1e9
N = int(input())
tetrahedron_dp = [0]
result_dp = [INF for _ in range(N+1)]
result_dp[0] = 0

# 사면체 dp 만들기
num = 0
triangle = 0
tetrahedron = 0

while True:
  num += 1
  triangle += num
  tetrahedron += triangle

  if tetrahedron > N:
    break
  tetrahedron_dp.append(tetrahedron)

# 결과 dp 만들기
for i in range(1, N+1):
  for j in range(1, len(tetrahedron_dp)):
    if tetrahedron_dp[j] > i:
      break

    result_dp[i] = min(result_dp[i], result_dp[i-tetrahedron_dp[j]] + 1)

print(result_dp[N])