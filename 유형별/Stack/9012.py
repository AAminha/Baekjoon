T = int(input())

for _ in range(T):
  data = input()
  stack = []
  result = True

  for d in data:
    if d == "(":
      stack.append(d)
    else:
      if len(stack) == 0:
        result = False
        break
      else:
        stack.pop()
  
  if result and len(stack) == 0:
    print("YES")
  else:
    print("NO")