a = list(map(int, input().split()))
b = list(map(int, input().split()))

s = 0
t = 0
for i in range(4):
  s += a[i]
  t += b[i]

print(max(s, t))