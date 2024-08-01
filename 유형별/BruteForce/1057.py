N, K, I = map(int, input().split())
count = 0

while K != I:
  K = (K // 2) + (K % 2)
  I = (I // 2) + (I % 2)
  count += 1

print(count)