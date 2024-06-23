num1 = int(input())
num2 = int(input())
num3 = int(input())

mama = 0

if num1 > num2:
  if num1 > num3:
    if num2 > num3:
      mama = num2
    else:
      mama = num3
  else:
    mama = num1
else:
  if num2 > num3:
    if num1 > num3:
      mama = num1
    else:
      mama = num3
  else:
    mama = num2

print(mama)