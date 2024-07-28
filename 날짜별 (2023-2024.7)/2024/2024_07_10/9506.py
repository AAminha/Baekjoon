while(1):
  num = int(input())
  result = []
  sum = 0

  if num == -1:
    break

  for i in range(1, num):
    if num % i == 0:
      result.append(i)
      sum += i
  
  if num == sum:
    print(num, "=", " + ".join(str(result[i]) for i in range(len(result))), sep = " ")
  else:
    print(num, "is NOT perfect.")