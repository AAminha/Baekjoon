A, B = map(int, input().split())
setA = set(list(map(int, input().split())))
setB = set(list(map(int, input().split())))

result = (setA - setB) | (setB - setA)
print(len(result))