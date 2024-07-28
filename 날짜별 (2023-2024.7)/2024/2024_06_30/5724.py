import sys

while(1):
  num = int(sys.stdin.readline())
  sum = 0

  if num == 0:
    break

  for i in range(1, num + 1):
    sum += i * i
  
  print(sum)