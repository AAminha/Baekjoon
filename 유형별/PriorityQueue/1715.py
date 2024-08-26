import heapq
import sys

N = int(input())
array = []

for _ in range(N):
  heapq.heappush(array, int(sys.stdin.readline()))

if len(array) == 1: print(0)
else:
  sum = 0

  while len(array) > 1:
    deck1 = heapq.heappop(array)
    deck2 = heapq.heappop(array)
    sum += deck1 + deck2
    heapq.heappush(array, deck1 + deck2)
  
  print(sum)