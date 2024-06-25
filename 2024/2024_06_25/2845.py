l, p = map(int, input().split())

articles = list(map(int, input().split()))

visitors = l * p

print(articles[0] - visitors, articles[1] - visitors, articles[2] - visitors, articles[3] - visitors, articles[4] - visitors)