import math

n = int(input())
candidate = list(map(int, input().split()))
main, sub = map(int, input().split())
count = 0

for i in range(n):
  count += 1
  candidate[i] -= main

  if candidate[i] > 0:
    count += math.ceil(candidate[i] / sub)

print(count)