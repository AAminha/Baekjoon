N, K = map(int, input().split())
plus = 0

while bin(N+plus).count('1') > K:
  plus += 1

print(plus)