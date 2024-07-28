n = int(input())
f = int(input())

n -= n % 100

if n % f > 0:
  n += (f - n % f)

if n % 100 < 10:
  print("0" + str(n % 100))
else:
  print(n % 100)