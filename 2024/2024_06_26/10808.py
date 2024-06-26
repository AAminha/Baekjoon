count = list(0 for _ in range(26))

s = list(input())

for ch in s:
  count[ord(ch)-97] += 1

print(*count)