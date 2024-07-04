arr = []
sum = 0
for _ in range(5):
  num = int(input())
  arr.append(num)
  sum += num

print(sum // 5)
print(sorted(arr)[2])