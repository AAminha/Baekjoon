words = [list(input()) for _ in range(5)]
result = ""

for i in range(15):
  for j in range(5):
    if len(words[j]) >= i + 1:
      result += words[j][i]

print(result)