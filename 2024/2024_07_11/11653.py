n = int(input())
current = 2
while(n > 1):
  if n % current == 0:
    n = n // current
    print(current)
  else:
    current += 1