alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
count = 0

str = input()

for i in range(len(alphabet)):
  count += str.count(alphabet[i])
  str = str.replace(alphabet[i], ' ')

count += len(str.replace(' ', ''))

print(count)