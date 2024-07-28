num = int(input())

if num == 1:
  print(1)
else:
  current = 1
  for i in range(1, num):
    if current + 1 <= num and num <= current + i * 6:
      print(i + 1)
      break
    else:
      current += i * 6