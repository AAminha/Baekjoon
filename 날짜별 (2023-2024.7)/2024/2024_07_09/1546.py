num = int(input())
score = list(map(int, input().split()))
max_score = max(score)

result = sum(score) / max_score * 100 / len(score)
print(result)