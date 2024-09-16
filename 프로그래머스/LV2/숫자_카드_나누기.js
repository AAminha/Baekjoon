function solution(arrayA, arrayB) {
  let result = 0;
  const divisorA = find_common_divisor(arrayA);
  const divisorB = find_common_divisor(arrayB);

  while (divisorA.length > 0) {
    const num = divisorA.pop();
    let isDivided = false;
    for (let i = 0; i < arrayB.length; i++) {
      if (arrayB[i] % num == 0) {
        isDivided = true;
        break;
      }
    }

    if (!isDivided) {
      result = Math.max(result, num);
      break;
    }
  }

  while (divisorB.length > 0) {
    const num = divisorB.pop();
    let isDivided = false;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] % num == 0) {
        isDivided = true;
        break;
      }
    }

    if (!isDivided) {
      result = Math.max(result, num);
      break;
    }
  }

  return result;
}

function find_common_divisor(array) {
  array.sort((a, b) => a - b);
  const min = array[0];
  const result = [];

  for (let i = 1; i <= min; i++) {
    result.push(i);
    for (let j = 0; j < array.length; j++) {
      if (array[j] % i != 0) {
        result.pop();
        break;
      }
    }
  }

  return result;
}
