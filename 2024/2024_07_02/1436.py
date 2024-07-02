n = int(input())
count = 0

current = 666
while(1):
  if str(current).count('666') >= 1:
    count += 1
  
  if count == n:
    print(current)
    break
  else:
    current += 1