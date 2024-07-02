count = list(0 for _ in range(26))
n = int(input())

for _ in range(n):
  name = input()
  count[ord(name[0]) - 97] += 1

result = ""
for i in range(len(count)):
  if count[i] >= 5:
    result += chr(i + 97)

if result == "":
  result = 'PREDAJA'

print(result)