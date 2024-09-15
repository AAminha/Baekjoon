from collections import deque

case = int(input())

for _ in range(case):
  N, M = map(int, input().split())
  documents = list(map(int, input().split()))
  queue = deque([])
  subQueue = deque([])

  for i in range(len(documents)):
    queue.append((documents[i], i))

  count = 0
  
  while queue:
    count += 1
    maxNum = max(queue)
    length = len(queue)
    isFinish = False

    for _ in range(length):
      document = queue.popleft()

      if document[0] == maxNum[0]:
        if document[1] == M:
          print(count)
          isFinish = True
        break
      elif document[0] != maxNum[0]:
        queue.append(document)
    
    if isFinish: break