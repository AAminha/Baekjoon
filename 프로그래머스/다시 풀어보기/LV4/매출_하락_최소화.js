function solution(sales, links) {
  const tree = {}
  const dp = {}
  links.forEach((link) => {
    const [leader, member] = link
    if (!tree[leader]) tree[leader] = []
    if (!tree[member]) tree[member] = []
    tree[leader].push(member)
  })

  treeDP(sales, tree, dp, 1)

  return Math.min(...dp[1])
}

function treeDP(sales, tree, dp, index) {
  dp[index] = [0, 0]
  const children = tree[index]

  children.forEach((child) => {
    if (!dp[child]) treeDP(sales, tree, dp, child)
  })

  // dp[index][0] 구하기 - 1
  let isAttend = false
  dp[index][0] = children.reduce((sum, child) => {
    if (dp[child][0] < dp[child][1]) return (sum += dp[child][0])
    isAttend = true
    return (sum += dp[child][1])
  }, 0)

  // dp[index][0] 구하기 -2
  if (!isAttend) {
    let minimum = Infinity
    for (let i = 0; i < children.length; i++) {
      let sum = 0
      for (let j = 0; j < children.length; j++) {
        if (i !== j) sum += dp[children[j]][0]
        else sum += dp[children[j]][1]
      }
      minimum = Math.min(minimum, sum)
    }
    if (minimum !== Infinity) dp[index][0] = minimum
  }

  // dp[index][1] 구하기
  dp[index][1] =
    children.reduce((sum, child) => (sum += Math.min(...dp[child])), 0) + sales[index - 1]
}
