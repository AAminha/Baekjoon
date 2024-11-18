N, P, Q = map(int, input().split())
dp = {}
dp[0] = 1

def find_sequence(num):
  if num not in dp:
    dp[num] = find_sequence(num // P) + find_sequence(num // Q)
  
  return dp[num]

print(find_sequence(N))