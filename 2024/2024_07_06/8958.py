n = int(input())

for _ in range(n):
  score = input()
  sum = 0
  count = 0

  for i in range(len(score)):
    if score[i] == 'O':
      count += 1
      sum += count
    else:
      count = 0
  
  print(sum)