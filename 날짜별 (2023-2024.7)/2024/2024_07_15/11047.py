N, K = map(int, input().split())
values = []
sum = 0

for _ in range(N):
  values.append(int(input()))

for i in reversed(range(N)):
  num = K // values[i]
  sum += num
  K -= num * values[i]

print(sum)