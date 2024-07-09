def rev(n):
  num = list(str(n))
  num.reverse()
  result  = ""

  for i in range(len(num)):
    result += num[i]
  
  return int(result)

x, y = map(int, input().split())
print(rev(rev(x) + rev(y)))