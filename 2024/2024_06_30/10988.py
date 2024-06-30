str = input()
result = 1

for i in range(len(str) // 2):
  if str[i] != str[(len(str) - 1 - i)]:
    result = 0

print(result)