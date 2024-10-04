import sys

N = int(input())
employee_list = set([])

for _ in range(N):
  name, record = map(str, sys.stdin.readline().rstrip().split())
  if record == 'enter':
    employee_list.add(name)
  else:
    employee_list.remove(name)

employee_list = list(employee_list)
employee_list.sort()
employee_list.reverse()

for name in employee_list:
  print(name)