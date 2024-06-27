hour, min = map(int, input().split())
time = int(input())

hour += time // 60
min += time % 60

if min > 59:
  hour += min // 60
  min %= 60

if hour > 23:
  hour = hour % 24

print(hour, min)