N = int(input())

num = 1
count = 0
while(num <= N):
  if num < 100:
    count += 1
  else:
    str_num = str(num)
    if int(str_num[2]) - int(str_num[1]) == int(str_num[1]) - int(str_num[0]):
      count += 1

  num += 1

print(count)