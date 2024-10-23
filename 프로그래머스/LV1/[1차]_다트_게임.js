function solution(dartResult) {
  const result = [];
  for (let i = 0; i < dartResult.length; i += 2) {
    let score = dartResult[i];

    while (i + 1 < dartResult.length && !isNaN(Number(dartResult[i + 1]))) {
      i++;
      score += dartResult[i];
    }

    const area = dartResult[i + 1];
    if (area === "S") {
      score = Number(score);
    } else if (area === "D") {
      score = Number(score) ** 2;
    } else if (area === "T") {
      score = Number(score) ** 3;
    }

    if (i + 2 < dartResult.length) {
      if (dartResult[i + 2] === "*") {
        score = score * 2;
        i++;

        if (result.length > 0) {
          result[result.length - 1] *= 2;
        }
      } else if (dartResult[i + 2] === "#") {
        score = score * -1;
        i++;
      }
    }

    result.push(score);
  }

  const sum = result.reduce((prev, cur) => (prev += cur), 0);
  return sum;
}
