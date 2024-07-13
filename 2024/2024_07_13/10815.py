import sys

n = int(input())
cards = list(map(int, sys.stdin.readline().split()))
cards.sort()

m = int(input())
checks = list(map(int, sys.stdin.readline().split()))
result = [0] * m

for i in range(m):
  high = n - 1
  low = 0

  while(low <= high):
    mid = (low + high) // 2

    if cards[mid] == checks[i]:
      result[i] = 1
      break
    elif cards[mid] > checks[i]:
      high = mid - 1
    else:
      low = mid + 1

print(*result)