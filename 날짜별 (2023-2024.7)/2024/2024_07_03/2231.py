import sys

n = int(sys.stdin.readline().strip())

for i in range(1, n+1):
  num_sum = sum((map(int, str(i)))) + i

  if num_sum == n:
    print(i)
    break
  if i == n:
    print(0)
    break