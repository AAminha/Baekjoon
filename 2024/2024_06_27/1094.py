n = 64
x = int(input())
count = 0

while(x > 0):
  if n > x:
    n = n // 2
  else:
    x -= n
    count += 1

print(count)