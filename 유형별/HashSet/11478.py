str = input()
array = []

for i in range(len(str)):
  for j in range(i+1, len(str) + 1):
    array.append(str[i:j])

result = list(set(array))
print(len(result))