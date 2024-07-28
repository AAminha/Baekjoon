num = int(input())
step = 1

while(1):
  if 0 < num and num <= step:
    if step % 2 == 1:
      print("%d/%d"%(step - num + 1, num))
    else:
      print("%d/%d"%(num, step - num + 1))
    break
  else:
    num -= step
    step += 1