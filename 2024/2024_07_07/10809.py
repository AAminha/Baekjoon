arr = [-1 for _ in range(26)]
str = input()

for i in range(len(str)):
  index = ord(str[i]) - 97
  if arr[index] == -1:
    arr[index] = i

print(*arr)