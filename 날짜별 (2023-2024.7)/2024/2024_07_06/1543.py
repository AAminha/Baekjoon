word = input()
key = input()
count = 0
index = 0

while(1):
  if index > len(word) - len(key) + 2:
    break

  if word.find(key, index, index + len(key)) >= 0:
    count += 1
    index += len(key)
  else:
    index += 1

print(count)