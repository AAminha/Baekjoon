import sys

colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

c1 = sys.stdin.readline().strip()
c2 = sys.stdin.readline().strip()
c3 = sys.stdin.readline().strip()

result = (colors.index(c1) * 10 + colors.index(c2)) * 10 ** colors.index(c3)

print(result)