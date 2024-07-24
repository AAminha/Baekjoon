import math

T = int(input())

for i in range(T):
  x1, y1, r1, x2, y2, r2 = map(int, input().split())
  d = math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

  if d == 0 and r1 == r2:
    print(-1)
  elif d > r1 + r2:
    print(0)
  elif d == r1 + r2:
    print(1)
  elif d < r1 + r2:
    if d < abs(r1 - r2): print(0)
    elif d == abs(r1 - r2): print(1)
    else: print(2)
  else:
    print(0)