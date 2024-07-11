str = input()
result = ""

for i in range(len(str)):
  num = ord(str[i])

  if num >= 65 and num <= 90:
    num += 13
    if num > 90:
      num -= 26
    result += chr(num)
  elif num >= 97 and num <= 122:
    num += 13
    if num > 122:
      num -= 26
    result += chr(num)
  else:
    result += str[i]

print(result)