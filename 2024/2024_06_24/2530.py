a, b, c = map(int, input().split())
d = int(input())

c += d

b += c // 60
c = c % 60

a += b // 60
b = b % 60

if a > 23:
  a -= 24 * (a // 24)

print(a, b, c)