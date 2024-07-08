a, b = map(int, input().split())
a -= 1
sum = 0

for i in range(1, b + 1):
  if b <= 0:
    break
  
  if i < b:
    sum += i * i
  else:
    sum += b * i
  
  b -= i

for i in range(1, a + 1):
  if a <= 0:
    break
  
  if i < a:
    sum -= i * i
  else:
    sum -= a * i
  
  a -= i

print(sum)