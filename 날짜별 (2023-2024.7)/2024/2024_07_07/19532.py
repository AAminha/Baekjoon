a, b, c, d, e, f = map(int, input().split())

x = 0
y = 0

if a == 0:
  y = c // b
  x = (f - e * y) // d
elif d == 0:
  y = f // e
  x = (c - b * y) // a
else:
  y = (c * d - a * f) // (b * d - a * e)
  x = (c - b * y) // a

print(x, y)