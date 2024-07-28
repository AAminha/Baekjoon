n = int(input())
count = 0

for _ in range(n):
  str = input()
  str_alpha = []

  for i in range(len(str)):
    if str[i] in str_alpha and str[i - 1] != str[i]:
      break
    elif i == len(str) - 1:
      count += 1
    else:
      str_alpha.append(str[i])

print(count)