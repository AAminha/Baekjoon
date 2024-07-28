n = input()
li = []

for i in range(len(n)):
  li.append(n[i])

print(*sorted(li, reverse=True), sep="")