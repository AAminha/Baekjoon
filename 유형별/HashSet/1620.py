import sys

N, M = map(int, input().split())
dict1 = {}
dict2 = {}

for i in range(N):
  pocketmon = sys.stdin.readline().rstrip()
  dict1[pocketmon] = i + 1
  dict2[i + 1] = pocketmon

for _ in range(M):
  str = sys.stdin.readline().rstrip()
  
  if str.isdigit():
    print(dict2[int(str)])
  else:
    print(dict1[str])