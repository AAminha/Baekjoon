from collections import deque

case = int(input())

for _ in range(case):
  N, M = map(int, input().split())
  documents = list(map(int, input().split()))
  queue = deque([])
  subQueue = deque([])

  for i in range(len(documents)):
    queue.append((i, documents[i]))

  count = 0
  while queue:
    count += 1
    current_document = queue.popleft()
    
    while queue:
      document = queue.popleft()
      
      if current_document[1] < document[1]:
        queue.append(current_document)
        queue.extend(subQueue)
        subQueue.clear()
        current_document = document
      else:
        subQueue.append(document)
    
    if current_document[0] == M:
      print(count)
      break

    queue.extend(subQueue)
    subQueue.clear()