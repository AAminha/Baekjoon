while(1):
  a, b, c = map(int, input().split())

  if a == b == c == 0:
    break

  max_num = max(a, b, c)
  if max_num ** 2 * 2 == a ** 2 + b ** 2 + c ** 2:
    print("right")
  else:
    print("wrong")