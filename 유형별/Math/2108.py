import sys

N = int(input())
numbers = []

for _ in range(N):
  numbers.append(int(sys.stdin.readline().rstrip()))

numbers.sort()

# 산술평균 & 최빈값 구하기
sum = 0
count = {}
for num in numbers:
  sum += num

  if num not in count:
    count[num] = 1
  else:
    count[num] += 1

print(round(sum / N))

print(numbers[N // 2])

max = [[-1], -1]
for key, value in count.items():
  if max[1] < value:
    max[0] = [key]
    max[1] = value
  elif max[1] == value:
    max[0].append(key)
if len(max[0]) == 1:
  print(max[0][0])
else:
  print(max[0][1])

print(numbers[N-1] - numbers[0])