import sys

case = int(input())

for _ in range(case):
  a, b = map(int, sys.stdin.readline().split())
  a %= 10

  if a % 10 == 0:
    print(10)
  elif a == 1 or a == 5 or a == 6:
    print(a)
  elif a == 4 or a == 9:
    if b % 2 == 1:
      print(a)
    else:
      print(a ** 2 % 10)
  else:
    if b % 4== 0:
      print(a ** 4 % 10)
    else:
      print(a ** (b % 4) % 10) 