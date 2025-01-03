function solution(expression) {
  // 표현식 정제
  const expressions = [];
  let num = '';
  for (let i = 0; i < expression.length; i++) {
    if ('*+-'.includes(expression[i])) {
      expressions.push(Number(num));
      expressions.push(expression[i]);
      num = '';
    } else {
      num += expression[i];
    }
  }
  expressions.push(Number(num));

  // 연산자 우선순위 정하기
  const priority = [];
  dfs([], priority);

  // 연산자 우선순위에 맞춰서 계산하기 & 최대값 구하기
  let max = 0;
  for (let i = 0; i < priority.length; i++) {
    const copied = [...expressions];
    max = Math.max(max, calculate(copied, priority[i]));
  }

  return max;
}

function dfs(array, priority) {
  if (array.length === 3) {
    priority.push(array);
    return;
  }

  const operations = ['+', '*', '-'];
  for (let i = 0; i < operations.length; i++) {
    if (!array.includes(operations[i]))
      dfs([...array, operations[i]], priority);
  }
}

function calculate(ex, op) {
  for (let i = 0; i < op.length; i++) {
    while (ex.includes(op[i])) {
      const index = ex.indexOf(op[i]);
      let result = 0;
      switch (op[i]) {
        case '+':
          result = ex[index - 1] + ex[index + 1];
          break;
        case '-':
          result = ex[index - 1] - ex[index + 1];
          break;
        default:
          result = ex[index - 1] * ex[index + 1];
      }

      ex.splice(index - 1, 3, result);
    }
  }
  return Math.abs(ex[0]);
}
