T = int(input())

for _ in range(T):
  count0 = 1
  count1 = 0

  num = int(input())

  for i in range(num):
    count0, count1 = count1, count0 + count1
  
  print(count0, count1)