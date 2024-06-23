while(1):
  num = int(input())
  
  if num == 0:
    break

  result = 0
  for i in range(num):
    result += (i + 1)
  
  print(result)