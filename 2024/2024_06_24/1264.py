char = ['a','e','i','o','u', 'A','E','I','O','U']

while(1):
  count = 0
  str = input()

  if str == '#':
    break

  for s in str:
    if s in char:
      count += 1

  print(count)