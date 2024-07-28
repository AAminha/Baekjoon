num = int(input())

for i in range(num):
  str = input()

  if i == 0:
    result = list(str)
  else:
    for j in range(len(str)):
      if result[j] != str[j]:
        result[j] = '?'

print(*result, sep="")