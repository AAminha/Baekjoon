import sys

a = 0
b = 0
c = 0
num = int(sys.stdin.readline())

if num % 10 > 0:
  print(-1)
else:
  a = min(num // (5 * 60), 60)
  num -= 5 * 60 * a

  b = min(num // (1 * 60), 300)
  num -= 1 * 60 * b
  
  c = min(num // 10, 10000)
  num -= 10 * c

  if num > 0:
    print(-1)
  else:
    print(a, b, c)