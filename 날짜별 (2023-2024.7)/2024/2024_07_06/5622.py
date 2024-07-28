dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

num = input()
sum = 0

for i in range(len(num)):
  for j in range(len(dial)):
    if dial[j].find(num[i]) >= 0:
      sum += j + 3

print(sum)