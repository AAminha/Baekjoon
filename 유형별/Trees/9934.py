def putNum(index, array):
  if len(array) == 1:
    tree[index].append(array[0])
    return
  
  parent_index = len(array) // 2
  tree[index].append(array[parent_index])

  putNum(index + 1, array[0: parent_index])

  putNum(index + 1, array[parent_index + 1:])

K = int(input())
nums = list(map(int, input().split()))
tree = [[] for _ in range(K)]

putNum(0, nums)

for i in range(K):
  print(*tree[i])