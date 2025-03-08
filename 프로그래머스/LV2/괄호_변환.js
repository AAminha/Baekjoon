function solution(p) {
  p = p.split('');
  let startIndex = 0;
  const splitedStr = [];

  while (startIndex < p.length) {
    let left = 0;
    let right = 0;

    for (let i = startIndex; i < p.length; i++) {
      if (p[i] === '(') left++;
      else right++;

      if (left === right) {
        splitedStr.push(p.slice(startIndex, i + 1));
        startIndex = i + 1;
        break;
      }
    }
  }

  let result = '';
  while (splitedStr.length > 0) {
    const current = splitedStr.pop();
    // 올바른 괄호 문자열인지 체크
    if (checkCorrectStr(current)) {
      result = current.join('') + result;
      continue;
    }

    // 아니라면 아래 과정 수행
    let currentResult = '(' + result + ')';
    if (current.length > 2) {
      for (let i = 1; i < current.length - 1; i++) {
        if (current[i] === '(') currentResult += ')';
        else currentResult += '(';
      }
    }

    result = currentResult;
  }

  return result;
}

function checkCorrectStr(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(arr[i]);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
