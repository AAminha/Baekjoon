n = int(input())
str = []

for _ in range(n):
  str.append(input())

str = list(set(str))

str.sort()
str.sort(key=len)

for i in range(len(str)):
  print(str[i])