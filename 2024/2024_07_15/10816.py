import sys

N = int(input())
cards = list(map(int, sys.stdin.readline().split()))
cards.sort()
dict = {}

for num in cards:
  if num in dict:
    dict[num] += 1
  else:
    dict[num] = 1

M = int(input())
checks = list(map(int, sys.stdin.readline().split()))
result = [0] * M

for i in range(M):
  low = 0
  high = M - 1

  while(low <= high):
    mid = (low + high) // 2

    if cards[mid] == checks[i]:
      result[i] = dict[checks[i]]
      break
    elif cards[mid] > checks[i]:
      high = mid - 1
    else:
      low = mid + 1

print(*result)