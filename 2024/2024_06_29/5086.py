while(1):
  a, b = map(int, input().split())
  
  if a == b == 0:
    break

  if b // a > 0 and b % a == 0:
    print("factor")
  elif a // b > 0 and a % b == 0:
    print("multiple")
  else:
    print("neither")