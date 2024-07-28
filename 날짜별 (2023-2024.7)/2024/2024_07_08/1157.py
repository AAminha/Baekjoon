word = input()
word = word.lower()

count = list([0 for _ in range(26)])
max_count = 0
max_word = ""

for i in range(len(word)):
  index = ord(word[i]) - 97
  count[index] += 1

  if count[index] > max_count:
    max_count = count[index]
    max_word = word[i].upper()
  elif count[index] == max_count:
    max_word = "?"

print(max_word)