arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
x, y = map(int, input().split())
count = 0

for i in range(x):
  if x == i + 1:
    count += y
    break
  elif x > i + 1:
    count += arr[i]

print(day[count % 7])