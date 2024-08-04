N, M = map(int, input().split())
n_set = set([])
m_set = set([])

for _ in range(N):
  n_set.add(input())

for _ in range(M):
  m_set.add(input())

result_set = n_set & m_set
result = sorted(list(result_set))

print(len(result))
print(*result, sep="\n")