while(1):
  str = input()
  arr = []

  if str == '.': break

  for i in str:
    if i == '(' or i == '[':
      arr.append(i)
    elif i == ')':
      if len(arr) == 0 or arr.pop() == '[':
        print('no')
        break
    elif i == ']':
      if len(arr) == 0 or arr.pop() == '(':
        print('no')
        break
    elif i == '.':
      if len(arr) == 0: print('yes')
      else: print('no')
      break