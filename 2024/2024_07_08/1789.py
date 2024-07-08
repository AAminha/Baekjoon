s = int(input())
result = 1
sum = 0

while(1):
  sum += result

  if sum > s:
    print(result - 1)
    break
  else:
    result += 1